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
	TermsAndConditions: 'TermsAndConditions',
	ListAddress: 'ListAddress',
	DataPrivacy: 'DataPrivacy',
	FAQs: 'FAQs',
	Settings: 'Settings',
	SignUp: 'SignUp',
	SignUpServices: 'SignUpServices',
	ForgotPass: 'ForgotPass',
	Otp: 'Otp',
	ChangePasswordForgot: 'ChangePasswordForgot',
	BottomTab: 'BottomTab',
	Order: 'Order',
	User: 'User',
	Booking: 'Booking',
});
