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
	address: string;
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
	sendTime: string;
	isRead: boolean;
	userId: string;
}
export interface ServiceProps {
	id: string;
	image: string;
	name: string;
	description: string;
	averageRating: number;
	serviceProviderName: string;
	serviceProviderPhoneNumber: string;
	serviceProviderId: string;
}
export interface EvaluateProps {
	id: string;
	id_service: string;
	star: number;
	images: string[];
	user_id: string;
}
