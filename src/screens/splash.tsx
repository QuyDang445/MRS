import messaging from '@react-native-firebase/messaging';
import LottieView from 'lottie-react-native';
import React, {memo, useEffect} from 'react';
import {ANIMATIONS} from '../assets/image-paths';
import FixedContainer from '../components/fixed-container';
import {TABLE} from '../constants/enum';
import {ROUTE_KEY} from '../navigator/routers';
import {RootStackScreenProps} from '../navigator/stacks';
import API from '../services/api';
import {updateNotificationList, updateUserInfo} from '../stores/reducers/userReducer';
import {useAppDispatch, useAppSelector} from '../stores/store/storeHooks';
import {widthScale} from '../styles/scaling-utils';
import {sleep} from '../utils/time';
import {NotificationItemProps} from '../constants/types';

const Splash = (props: RootStackScreenProps<'Splash'>) => {
	const {navigation} = props;
	const dispatch = useAppDispatch();

	// Test user
	// const userInfo = testUser;
	// dispatch(updateUserInfo(testUser));
	// console.log('Userinfo', JSON.stringify(userInfo));

	const userInfo = useAppSelector(state => state.userInfoReducer.userInfo);

	const updateTokenDevice = async () => {
		const userCurrent = await API.get(`${TABLE.USERS}/${userInfo?.id}`);

		const token = await messaging().getToken();
		const newUser = await API.put(`${TABLE.USERS}/${userInfo?.id}`, {...userCurrent, tokenDevice: token});

		dispatch(updateUserInfo(newUser));
	};

	const getNotificationList = async () => {
		console.log('User info: ' + userInfo?.id);
		await API.get(`${TABLE.NOTIFICATION}`)
			.then(result => {
				if (result) {
					const filterNotification = result.filter(item => item != null && item.userId == userInfo.id);
					console.log('noti' + JSON.stringify(filterNotification));

					dispatch(updateNotificationList(filterNotification));
				}
			})
			.catch(error => {
				console.log(error.message);
			});

		dispatch(updateUserInfo(userInfo));
	};

	useEffect(() => {
		(async () => {
			await sleep(2000);

			// Thu test notification token
			const token = await messaging().getToken();
			console.log('Device token: ', token);

			await getNotificationList();

			if (userInfo) {
				await updateTokenDevice();
				navigation.replace(ROUTE_KEY.BottomTab);
				await updateTokenDevice();
			} else {
				navigation.replace(ROUTE_KEY.LogIn);
			}
		})();
	}, []);

	return (
		<FixedContainer style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			<LottieView style={{width: widthScale(300), height: widthScale(300)}} source={ANIMATIONS.SPLASH} autoPlay loop speed={1.5} />
		</FixedContainer>
	);
};
export default memo(Splash);
