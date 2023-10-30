import {CardStyleInterpolators, createStackNavigator, StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import React, {memo} from 'react';
import {Settings, StyleSheet} from 'react-native';
import {Onboarding, Splash, Home, Search, Notification, NotificationDetail, ServiceDetail, LogIn, ForgotPass, SignUp, Otp} from '../screens';
import BottomTab from './bottom-tab';
import ChangePasswordForgot from '../screens/change-password-forgot';
import SignUpServices from '../screens/sign-up-servives';
import {RootStackScreensParams} from './params';
import {ROUTE_KEY} from './routers';
import UpdateInformation from '../screens/update-infomation';
import Booking from '../screens/booking';
import Setting from '../screens/setting';
import FAQs from '../screens/FAQs';
import Privacypolicy from '../screens/Privacy policy';
import Termsandconditions from '../screens/Termsandconditions';

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
			<Screen name={ROUTE_KEY.Home} component={Home} />
			<Screen name={ROUTE_KEY.Search} component={Search} />
			<Screen name={ROUTE_KEY.Notification} component={Notification} />
			<Screen name={ROUTE_KEY.NotificationDetail} component={NotificationDetail} />
			<Screen name={ROUTE_KEY.BottomTab} component={BottomTab} />
			<Screen name={ROUTE_KEY.UpdateInformation} component={UpdateInformation} />
			<Screen name={ROUTE_KEY.ServiceDetail} component={ServiceDetail} />
			<Screen name={ROUTE_KEY.SignUp} component={SignUp} />
			<Screen name={ROUTE_KEY.LogIn} component={LogIn} />
			<Screen name={ROUTE_KEY.SignUpServices} component={SignUpServices} />
			<Screen name={ROUTE_KEY.ForgotPass} component={ForgotPass} />
			<Screen name={ROUTE_KEY.Otp} component={Otp} />
			<Screen name={ROUTE_KEY.ChangePasswordForgot} component={ChangePasswordForgot} />
			<Screen name={ROUTE_KEY.Booking} component={Booking} />
			<Screen name={ROUTE_KEY.Setting} component={Setting} />
			<Screen name={ROUTE_KEY.FAQs} component={FAQs} />
			<Screen name={ROUTE_KEY.Privacypolicy} component={Privacypolicy} />
			<Screen name={ROUTE_KEY.Termsandconditions} component={Termsandconditions} />
		</Navigator>
	);
};

export default memo(Stacks);
const styles = StyleSheet.create({});
