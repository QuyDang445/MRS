function createEnum<T extends {[P in keyof T]: P}>(o: T) {
	return o;
}
export const ROUTE_KEY = createEnum({
	Splash: 'Splash',
	Login: 'Login',
	Onboarding: 'Onboarding',
	Home: 'Home',
	Search: 'Search',
	ServiceDetail: 'ServiceDetail',
	Notification: 'Notification',
	NotificationDetail: 'NotificationDetail',
	ChangePassword: 'ChangePassword',
	TermsAndConditions: 'TermsAndConditions',
	UpdateInformation: 'UpdateInformation',
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
});
