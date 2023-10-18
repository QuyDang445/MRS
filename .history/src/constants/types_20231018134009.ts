import {TYPE_USER} from './enum';

export interface ImageProps {
	name: string;
	height?: number;
	width?: number;
	uri: string;
	type?: string;
}
