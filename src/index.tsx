import {NavigationContainer, NavigationContainerRef, NavigationState, useNavigation} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import React, {useEffect, useRef, useState} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Spinner from './components/spinner';
import {RootStackScreensParams} from './navigator/params';
import Stacks from './navigator/stacks';
import store, {persistor} from './stores/store/store';
import notifee, {AndroidImportance, EventType} from '@notifee/react-native';
import {CHANNEL_ID} from './constants/constants';
import {NotificationProps} from './constants/types';
import API from './services/api';
import {TABLE} from './constants/enum';
import {useAppSelector} from './stores/store/storeHooks';
import {onDisplayNotification} from '..';

const App = () => {
	const navigationRef = useRef<NavigationContainerRef<RootStackScreensParams>>(null);

	useEffect(() => {
		messaging().onNotificationOpenedApp(remoteMessage => {
			console.log('Notification caused app to open from background state:', remoteMessage.notification);
		});

		messaging()
			.getInitialNotification()
			.then(remoteMessage => {
				if (remoteMessage) {
					console.log('Notification caused app to open from quit state:', remoteMessage.notification);
				}
			});
	}, []);

	useEffect(() => {
		const unsubscribe = messaging().onMessage(async remoteMessage => {
			console.log('Message handled in the foreground!');
			onDisplayNotification(remoteMessage);
		});
		return unsubscribe;
	}, []);

	const screenTracking = (state?: NavigationState) => {
		if (state) {
			const route = state?.routes[state.index];
			if (route.state) {
				screenTracking(route?.state as any);
				return;
			}
			console.log(`------> ${route?.name}`);
		}
	};

	useEffect(() => {
		notifee.createChannel({
			id: CHANNEL_ID,
			importance: AndroidImportance.HIGH,
			name: CHANNEL_ID,
			sound: 'custom_sound',
		});
	}, []);
	

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NavigationContainer ref={navigationRef} onStateChange={screenTracking}>
					<Stacks />
					<Spinner />
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
};

export default App;
