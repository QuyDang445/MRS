import {NOTIFICATION_TYPE, TYPE_ORDER_SERVICE, TYPE_USER} from './enum';

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
	receiveBooking?: boolean;
	isAccept?: boolean;
	dateRegister?: number;
	reasonBlock: string;
}

export interface NotificationProps {
	id: string;
	title: string;
	body: string;
	time: number;
	isRead: boolean;
	data: {
		userId: string;
		status: string;
	};
}
export interface ServiceProps {
	id: string;
	name: string;
	category: string;
	servicer: string;
	description: string;
	image: string;
	categoryObject: {idCategoryService: string; name: string};
	servicerObject: UserProps;
	evaluate: EvaluateProps[];
	star: number;
}
export interface EvaluateProps {
	id: string;
	id_service: string;
	star: number;
	review: string;
	images: string[];
	user_id: string;
	userObject?: UserProps;
	content?: string;
}
export interface Category {
	id: string;
	name: string;
	idCategoryService: string;
}
export interface AddressProps {
	id: string;
	name: string;
	phone: string;
	address: string;
}

export interface OrderProps {
	imageDone: any;
	isEvaluate: any;
	id: string;
	idService: string;
	idUser: string;
	time: number;
	status: TYPE_ORDER_SERVICE;
	serviceObject: ServiceProps;
	servicerObject: UserProps;
	images: string[];
	nameUser: string;
	address: string;
	phone: string;
	description: string;
	timeBooking: number;
	categoryObject: Category;
	userObject: UserProps;
	statusCancel: string;
}
export interface ServicerBlockUser {
	idServicer: string;
	phone: string;
	id: string;
}
