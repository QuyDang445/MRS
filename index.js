/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import notifee, {AndroidImportance} from '@notifee/react-native';
import {CHANNEL_ID, CHANNEL_NAME} from './src/constants/constants';

export async function onDisplayNotification(remoteMessage: any) {
	// Request permissions (required for iOS)
	await notifee.requestPermission();

	// Create a channel (required for Android)
	const channelId = await notifee.createChannel({
		id: CHANNEL_ID,
		name: CHANNEL_NAME,
		vibration: true,
		importance: AndroidImportance.HIGH,
	});

	// Display a notification
	await notifee.displayNotification({
		title: remoteMessage.notification.title,
		body: remoteMessage.notification.body,
		android: {
			importance: AndroidImportance.HIGH,
			channelId: channelId,
			pressAction: {
				id: 'default',
			},
		},
	});
}

messaging().setBackgroundMessageHandler(async remoteMessage => {
	console.log('Message handled in the background!', remoteMessage);
	onDisplayNotification(remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
