import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {NotificationItemProps, OrderProps, ServiceProps ,Category,UserProps} from '../constants/types';


export type RootStackScreensParams = {
	Splash: undefined;
	LogIn: undefined;
	Onboarding: undefined;
	Home: undefined;
	Search:  {data: ServiceProps[]; categories: Category[]};
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
	UpdateInformation: undefined;
	Booking: {service: ServiceProps};
	Setting: undefined;
	FAQs: undefined;
	Privacypolicy: undefined;
	Termsandconditions: undefined;
	ChangePassword: undefined;
	ListAddress: undefined | {onChoose: (text: string) => void};
	DetailOrder: {data: OrderProps};
	InfoServicer: {idServicer: string};
	Listblock: undefined;
	EvaluateService: undefined;
};
