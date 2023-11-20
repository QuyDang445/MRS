import payment from "../screens/admin/payment";


function createEnum<T extends {[P in keyof T]: P}>(o: T) {
	return o;
}
export const ROUTE_KEY = createEnum({
	Splash: 'Splash',
	LogIn: 'LogIn',
	Onboarding: 'Onboarding',
	Home: 'Home',
	Search: 'Search',
	ServiceDetail: 'ServiceDetail',
	Notification: 'Notification',
	NotificationDetail: 'NotificationDetail',
	UpdateInformation: 'UpdateInformation',
	ChangePassword: 'ChangePassword',
	ListAddress: 'ListAddress',
	DataPrivacy: 'DataPrivacy',
	FAQs: 'FAQs',
	Setting: 'Setting',
	Privacypolicy: 'Privacypolicy',
	Termsandconditions: 'Termsandconditions',
	SignUp: 'SignUp',
	SignUpServices: 'SignUpServices',
	ForgotPass: 'ForgotPass',
	Otp: 'Otp',
	ChangePasswordForgot: 'ChangePasswordForgot',
	BottomTab: 'BottomTab',
	Order: 'Order',
	User: 'User',
	Booking: 'Booking',
	DetailOrder: 'DetailOrder',
	EvaluateService: 'EvaluateService',
	Listblock: 'Listblock',
	AddService: 'AddService',
	AcceptServicer: 'AcceptServicer',
	ManagePayment: 'ManagePayment',
	ManageServicer: 'ManageServicer',
	ManageUser: 'ManageUser',
	InfoDetailUser: 'InfoDetailUser',
	Payment: 'Payment',
	AllReview: 'AllReview',
	InfoServicer: 'InfoServicer',
	
	InfoAcceptServicer: 'InfoAcceptServicer',
	EditPaymentFee: 'EditPaymentFee',
	AddPayment: 'AddPayment',
	FeeService: 'FeeService',
	
});
