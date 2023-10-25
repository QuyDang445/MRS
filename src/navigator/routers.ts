function createEnum<T extends {[P in keyof T]: P}>(o: T) {
	return o;
}
export const ROUTE_KEY = createEnum({
	Splash: 'Splash',
	Login: 'Login',
	Onboarding: 'Onboarding',
	SignUp: 'SignUp',
	SignUpServices: 'SignUpServices',
	ForgotPass: 'ForgotPass',
	Otp: 'Otp',
	ChangePasswordForgot: 'ChangePasswordForgot',
	Home: 'Home',
});
