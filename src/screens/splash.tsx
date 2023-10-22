import messaging from '@react-native-firebase/messaging';
import LottieView from 'lottie-react-native';
import React, {memo, useEffect} from 'react';
import {ANIMATIONS} from '../assets/image-paths';
import FixedContainer from '../components/fixed-container';
import {TABLE, TYPE_USER} from '../constants/enum';
import {ROUTE_KEY} from '../navigator/routers';
import {RootStackScreenProps} from '../navigator/stacks';
import API from '../services/api';
import {updateNotificationList, updateUserInfo} from '../stores/reducers/userReducer';
import {useAppDispatch} from '../stores/store/storeHooks';
import {widthScale} from '../styles/scaling-utils';
import {sleep} from '../utils/time';
import {NotificationItemProps} from '../constants/types';

const testUser = {
	id: 'NgALzZvaK1_xjMDABb',
	name: 'Test user',
	avatar:
		'https://firebasestorage.googleapis.com/v0/b/srm-afd4a.appspot.com/o/user_default_avatar.png?alt=media&token=676b9621-3891-454d-8eb8-dc3335f95924&_gl=1*9eepzk*_ga*MTQyNzQyOTc3OC4xNjg2Mzg5Mjk3*_ga_CW55HF8NVT*MTY5Nzk2OTA2NC41OS4xLjE2OTc5NzM4MDMuMzYuMC4w',
	address: '',
	phone: '0852586875',
	tokenDevice: 'T1ZIpS4ASLEUDBCXkjmJA9mKWoqMl7X7GU314vDUBbxjV1hfdlcxIfA3ROZnsinZMqEyoAaw770aw3XAKxsxztWleUvTL1',
	type: TYPE_USER.USER,
	password: 'Test123456',
	isBlocked: false,
	CCCD: {
		id: '',
		image: '',
	},
	isAccept: true,
};

const Splash = (props: RootStackScreenProps<'Splash'>) => {
	const {navigation} = props;
	const dispatch = useAppDispatch();

	// Test user
	const userInfo = testUser;
	dispatch(updateUserInfo(testUser));
	console.log('Userinfo', JSON.stringify(userInfo));

	// const userInfo = useAppSelector(state => state.userInfoReducer.userInfo);
	// const updateTokenDevice = async () => {
	// 	const userCurrent = await API.get(`${TABLE.USERS}/${userInfo?.id}`);

	// 	const token = await messaging().getToken();
	// 	const newUser = await API.put(`${TABLE.USERS}/${userInfo?.id}`, {...userCurrent, tokenDevice: token});

	// 	dispatch(updateUserInfo(newUser));
	// };

	const getNotificationList = async () => {
		const notificationList: NotificationItemProps[] = await API.get(`${TABLE.NOTIFICATION}`)
			.then(result => {
				const filterNotification = result.filter(item => item != null && item.userId == userInfo.id);
				dispatch(updateNotificationList(filterNotification));
			})
			.catch(error => {
				console.log(error.message);
			});
	};

	useEffect(() => {
		(async () => {
			await sleep(2000);

			// Thu test notification token
			const token = await messaging().getToken();
			console.log('Device token: ', token);

			await getNotificationList();

			if (userInfo) {
				// await updateTokenDevice();
				navigation.replace(ROUTE_KEY.BottomTab);
			} else {
				navigation.replace(ROUTE_KEY.BottomTab);
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
