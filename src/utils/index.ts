import {Alert,Linking, PermissionsAndroid, ToastAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {PERMISSIONS, request} from 'react-native-permissions';
import API from '../services/api';
import {EvaluateProps, ServiceProps} from '../constants/types';
import {TABLE} from '../constants/enum';
export const parseObjectToArray = (object: any) => {
	const array = [];
	for (const key in object) {
		if (Object.prototype.hasOwnProperty.call(object, key)) {
			const element: object = object[key as keyof object];
			array.push({...element, id: key});
		}
	}
	return array as any[];
};
export const showMessage = (message: string) => {
	// console.log(message);
	ToastAndroid.show(message, ToastAndroid.LONG);
};
export const getServiceAll = async () => {
	const arr = (await API.get(`${TABLE.SERVICE}`, true)) as ServiceProps[];

	// get info category
	for (let i = 0; i < arr.length; i++) {
		const category = (await API.get(`${TABLE.CATEGORY}/${arr[i].category}`, undefined, true)) as any;
		arr[i].categoryObject = category;
	}

	// get info service
	for (let i = 0; i < arr.length; i++) {
		const service = (await API.get(`${TABLE.USERS}/${arr[i].servicer}`, undefined, true)) as any;
		arr[i].servicerObject = service;
	}

	// get info star evalute
	for (let i = 0; i < arr.length; i++) {
		const evaluate = (await API.get(`${TABLE.EVALUATE}/${arr[i].id}`, true, true)) as EvaluateProps[];
		arr[i].evaluate = evaluate;

		// get info star
		let totalStar = 0;
		for (let j = 0; j < evaluate.length; j++) {
			totalStar += evaluate[j].star;
		}
		arr[i].star = totalStar / (evaluate.length || 1);
	}

	return arr;
};
export const requestLocationPermission = () => {
	const getAlert = () => {
		Alert.alert('THÔNG BÁO', 'Vui lòng cung cấp quyền truy cập vị trí!', [
			{
				text: 'Đồng ý',
				onPress: () => Linking.openSettings(),
				isPreferred: true,
				style: 'cancel',
			},
			{text: 'Huỷ', onPress: () => {}},
		]);
	};

	return new Promise<boolean>(async (resolve, reject) => {
		const granted = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
		if (granted === PermissionsAndroid.RESULTS.GRANTED) {
			resolve(true);
		} else {
			getAlert();
			reject(false);
		}
	});
};
export const getLocationMyDevice = async () => {
	try {
		const check = await requestLocationPermission();
		if (check) {
			return (await getMyLocation()) as {lat: number; long: number};
		}
	} catch (error) {}
};
export const getMyLocation = () =>
	new Promise((resolve, reject) =>
		Geolocation.getCurrentPosition(
			position => resolve({lat: position?.coords?.latitude, long: position?.coords?.longitude}),
			error => reject(error),
			{accuracy: {android: 'high', ios: 'best'}},
		),
	);
export const isNumber = (value: string) => /^\d+$/.test(value);

export const generateRandomId = () => {
	const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0;
		const v = c === 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
};

export const AlertYesNo = (title = 'THÔNG BÁO', message?: string, onYes?: () => void) =>
	Alert.alert(title, message, [{text: 'HUỶ'}, {text: 'OK', onPress: onYes}], {cancelable: false});
