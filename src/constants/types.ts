import {TYPE_USER} from './enum';

export interface ImageProps {
	name: string;
	height?: number;
	width?: number;
	uri: string;
	type?: string;
}

export interface UserProps {
	id: string;
	name: string;
	address: string[];
	avatar: string;
	phone: string;
	tokenDevice: string;
	type: TYPE_USER;
	password: string;
	isBlocked?: boolean;
	CCCD?: {
		id: string;
		image: string;
	};
	isAccept?: boolean;
}

export interface NotificationItemProps {
	id: string;
	title: string;
	message: string;
	sendTime: Date;
	read: boolean;
}
