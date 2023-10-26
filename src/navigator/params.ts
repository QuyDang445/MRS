import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {NotificationItemProps, ServiceProps} from '../constants/types';

export type RootStackScreensParams = {
	Splash: undefined;
	BottomTab: undefined;
	Login: undefined;
	Onboarding: undefined;
	Home: undefined;
	Search: undefined;
	ServiceDetail: {serviceData: ServiceProps};
	NotificationDetail: {notificationData: NotificationItemProps};
	Notification: undefined;
	ChangePassword: undefined;
	ListAddress: undefined;
};
