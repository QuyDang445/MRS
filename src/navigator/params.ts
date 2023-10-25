import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import { UserProps } from '../constants/types';

export type RootStackScreensParams = {
	Splash: undefined;
	Login: undefined;
	Onboarding: undefined;
	SignUp: undefined,
	SignUpServices: undefined,
	ForgotPass: undefined,
	Otp: {confirm: FirebaseAuthTypes.ConfirmationResult; userPhone: UserProps};
	ChangePasswordForgot: {userPhone: UserProps};
	Home: undefined;
};
