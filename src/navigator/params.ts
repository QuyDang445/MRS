import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {NotificationItemProps, ServiceProps} from '../constants/types';
import {UserProps} from '../constants/types';

export type RootStackScreensParams = {
	Splash: undefined;
	Login: undefined;
	Onboarding: undefined;
	Home: undefined;
	Search: undefined;
	ServiceDetail: {serviceData: ServiceProps};
	NotificationDetail: {notificationData: NotificationItemProps};
	Notification: undefined;
	SignUp: undefined;
	SignUpServices: undefined;
	ForgotPass: undefined;
	Otp: {confirm: FirebaseAuthTypes.ConfirmationResult; userPhone: UserProps};
	ChangePasswordForgot: {userPhone: UserProps};
	BottomTab: undefined;
	Order: undefined;
	User: undefined;
};
