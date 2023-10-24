import {CardStyleInterpolators, createStackNavigator, StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {Onboarding, Splash, Home, Search, Notification, NotificationDetail, ServiceDetail} from '../screens';
import BottomTab from './bottom-tab';
import {RootStackScreensParams} from './params';
import {ROUTE_KEY} from './routers';
import UpdateInformation from '../screens/update-infomation';
import Booking from '../screens/booking';

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
			<Screen name={ROUTE_KEY.Booking} component={Booking} />
		</Navigator>
	);
};

export default memo(Stacks);
const styles = StyleSheet.create({});
