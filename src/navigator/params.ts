import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {NotificationItemProps} from '../constants/types';

export type RootStackScreensParams = {
	Splash: undefined;
	BottomTab: undefined;
	Login: undefined;
	Onboarding: undefined;
	Home: undefined;
	Search: undefined;
	DetailService: undefined;
	NotificationDetail: {notificationData: NotificationItemProps};
	Notification: undefined;
};
