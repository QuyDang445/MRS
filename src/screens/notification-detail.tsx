import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {RootStackScreenProps} from '../navigator/stacks';
import FixedContainer from '../components/fixed-container';
import CustomHeader from '../components/custom-header';
import {NotificationItemProps} from '../constants/types';

const NotificationDetail = (props: RootStackScreenProps<'NotificationDetail'>) => {
	const notificationData = props.route.params;
	return (
		<FixedContainer>
			<CustomHeader title="Chi tiết thông báo" hideBack={false} />
			<View>
				<Text>Title: {notificationData.title}</Text>
				<Text>Message: {notificationData.message}</Text>
				<Text>Send time: {notificationData.sendTime}</Text>
			</View>
		</FixedContainer>
	);
};

export default NotificationDetail;
