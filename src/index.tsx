import {NavigationContainer, NavigationContainerRef, NavigationState, useNavigation} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';

import React, {useEffect, useRef, useState} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Spinner from './components/spinner';
import {RootStackScreensParams} from './navigator/params';
import Stacks from './navigator/stacks';
import store, {persistor} from './stores/store/store';
import {Alert} from 'react-native';
import {ROUTE_KEY} from './navigator/routers';
import notifee, {EventType} from '@notifee/react-native';

const App = () => {
	const navigationRef = useRef<NavigationContainerRef<RootStackScreensParams>>(null);
	// const navigation = useNavigation();
	const [loading, setLoading] = useState(true);
	// const [initialRoute, setInitialRoute] = useState(ROUTE_KEY.Home);

	useEffect(() => {
		// Assume a message-notification contains a "type" property in the data payload of the screen to open
		messaging().onNotificationOpenedApp(remoteMessage => {
			console.log('Notification caused app to open from background state:', remoteMessage.notification);
			// navigation.navigate(ROUTE_KEY.Notification);
		});

		// Check whether an initial notification is available
		messaging()
			.getInitialNotification()
			.then(remoteMessage => {
				if (remoteMessage) {
					console.log('Notification caused app to open from quit state:', remoteMessage.notification);
					// setInitialRoute(ROUTE_KEY.Home); // e.g. "Settings"
				}
				setLoading(false);
			});
	}, []);

	async function onDisplayNotification(remoteMessage: any) {
		// Request permissions (required for iOS)
		await notifee.requestPermission();

		// Create a channel (required for Android)
		const channelId = await notifee.createChannel({
			id: 'default',
			name: 'Default Channel',
			vibration: true,
		});

		// Display a notification
		await notifee.displayNotification({
			title: remoteMessage.notification.title,
			body: remoteMessage.notification.body,
			android: {
				channelId,
				// 	// smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
				// 	// // pressAction is needed if you want the notification to open the app when pressed
				// 	// pressAction: {
				// 	// 	id: 'default',
				// 	// },
			},
		});
	}

	useEffect(() => {
		const unsubscribe = messaging().onMessage(async remoteMessage => {
			onDisplayNotification(remoteMessage);
		});
		return unsubscribe;
	}, []);

	// useEffect(() => {
	// 	return notifee.onForegroundEvent(({type, detail}) => {
	// 		switch (type) {
	// 			case EventType.DISMISSED:
	// 				console.log('User dismissed notification', detail.notification);
	// 				break;
	// 			case EventType.PRESS:
	// 				console.log('User pressed notification', detail.notification);
	// 				break;
	// 		}
	// 	});
	// }, []);

	if (loading) {
		return null;
	}

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
