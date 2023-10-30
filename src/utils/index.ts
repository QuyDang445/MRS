import {Alert} from 'react-native';
import {TABLE, TYPE_ORDER_SERVICE, TYPE_USER} from '../constants/enum';
import {colors} from '../styles/colors';

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

export const isNumber = (value: string) => /^\d+$/.test(value);

export const generateRandomId = () => {
	const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0;
		const v = c === 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
};
export const getStatusOrder = (status: TYPE_ORDER_SERVICE) => {
	switch (status) {
		case TYPE_ORDER_SERVICE.OrderPending:
			return 'ĐANG CHỜ';
		case TYPE_ORDER_SERVICE.OrderInProcess:
			return 'ĐÃ XÁC NHẬN';
		case TYPE_ORDER_SERVICE.OrderCompleted:
			return 'HOÀN THÀNH';
		case TYPE_ORDER_SERVICE.OrderCanceled:
			return 'ĐÃ HUỶ';
	}
};
export const getColorStatusOrder = (status: TYPE_ORDER_SERVICE) => {
	switch (status) {
		case TYPE_ORDER_SERVICE.OrderPending:
			return colors.appColor;
		case TYPE_ORDER_SERVICE.OrderInProcess:
			return colors.appColor;
		case TYPE_ORDER_SERVICE.OrderCompleted:
			return colors.appColor;
		case TYPE_ORDER_SERVICE.OrderCanceled:
			return colors.red;
	}
};

export const showMessage = (message: string) => {
	console.log(message);
};
export const AlertYesNo = (title = 'THÔNG BÁO', message?: string, onYes?: () => void) =>
	Alert.alert(title, message, [{text: 'HUỶ'}, {text: 'OK', onPress: onYes}], {cancelable: false});
