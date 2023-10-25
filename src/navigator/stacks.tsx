import {CardStyleInterpolators, createStackNavigator, StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import Login from '../screens/login';
import Onboarding from '../screens/onboarding';
import SignUp from '../screens/sign-up';
import ForgotPass from '../screens/forgot-pass';
import Otp from '../screens/otp';
import Home from '../screens/home';
import ChangePasswordForgot from '../screens/change-password-forgot';
import SignUpServices from '../screens/sign-up-servives';
import Splash from '../screens/splash';
import {RootStackScreensParams} from './params';
import {ROUTE_KEY} from './routers';

export type RootStackScreens = keyof RootStackScreensParams;
export type RootStackScreenProps<T extends RootStackScreens> = StackScreenProps<RootStackScreensParams, T>;
export type UseRootStackNavigation<T extends RootStackScreens = 'Splash'> = StackNavigationProp<RootStackScreensParams, T>;

const {Navigator, Screen} = createStackNavigator<RootStackScreensParams>();

const Stacks = () => {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
				cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
			}}>
			<Screen name={ROUTE_KEY.Splash} component={Splash} />
			<Screen name={ROUTE_KEY.Onboarding} component={Onboarding} />
			<Screen name={ROUTE_KEY.Login} component={Login} />
			<Screen name={ROUTE_KEY.SignUp} component={SignUp} />
			<Screen name={ROUTE_KEY.SignUpServices} component={SignUpServices} />
			<Screen name={ROUTE_KEY.ForgotPass} component={ForgotPass} />
			<Screen name={ROUTE_KEY.Otp} component={Otp} />
			<Screen name={ROUTE_KEY.ChangePasswordForgot} component={ChangePasswordForgot} />
			<Screen name={ROUTE_KEY.Home} component={Home} />
		</Navigator>
	);
};

export default memo(Stacks);
const styles = StyleSheet.create({});