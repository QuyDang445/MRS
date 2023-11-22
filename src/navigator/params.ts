import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {NotificationProps, OrderProps, ServiceProps, Category, UserProps, BankType} from '../constants/types';

export type RootStackScreensParams = {
	Splash: undefined;
	LogIn: undefined;
	Onboarding: undefined;
	Home: undefined;
	Search: {data: ServiceProps[]; categories: Category[]};
	ServiceDetail: {serviceData: ServiceProps};
	NotificationDetail: {notificationData: NotificationProps};
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
	EvaluateService: {data: OrderProps};
	AddService: undefined | {data: ServiceProps};
	AcceptServicer: {data: UserProps[]};
	ManageServicer: undefined;
	ManageUser: undefined;
	ManagePayment: undefined;
	InfoDetailUser: {data: UserProps};
	Payment: undefined;
	AllReview: {idService: string};
	InfoAcceptServicer: {data: UserProps};
	FeeService: undefined;
	EditPaymentFee: undefined;
	AddPayment: undefined;
	InfoDetailServicer: {data: UserProps};
};
