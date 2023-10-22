/**
 * @format
 */
import messaging from '@react-native-firebase/messaging';
import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import notifee from '@notifee/react-native';

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
		},
	});
}

messaging().setBackgroundMessageHandler(async remoteMessage => {
	console.log('Message handled in the background!', remoteMessage);
	onDisplayNotification(remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
