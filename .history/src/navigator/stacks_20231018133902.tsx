import {CardStyleInterpolators, createStackNavigator, StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import Login from '../screens/login';
import Onboarding from '../screens/onboarding';
import Splash from '../screens/splash';
import BottomTab from './bottom-tab';
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
		</Navigator>
	);
};

export default memo(Stacks);
const styles = StyleSheet.create({});
