import LottieView from 'lottie-react-native';
import React, {memo, useEffect} from 'react';
import {ANIMATIONS} from '../assets/image-paths';
import FixedContainer from '../components/fixed-container';
import {ROUTE_KEY} from '../navigator/routers';
import {RootStackScreenProps} from '../navigator/stacks';
import {useAppDispatch, useAppSelector} from '../stores/store/storeHooks';
import {widthScale} from '../styles/scaling-utils';
import {sleep} from '../utils/time';
import notifee from '@notifee/react-native';

const Splash = (props: RootStackScreenProps<'Splash'>) => {
	const {navigation} = props;

	const userInfo = useAppSelector(state => state.userInfoReducer.userInfo);

	useEffect(() => {
		(async () => {
			await sleep(2000);
			await notifee.requestPermission();

			if (userInfo) {
				navigation.replace(ROUTE_KEY.BottomTab);
			} else {
				navigation.replace(ROUTE_KEY.LogIn);
			}
		})();
	}, []);

	return (
		<FixedContainer style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			<LottieView style={{width: widthScale(300), height: widthScale(300)}} source={ANIMATIONS.SPLASH} autoPlay loop speed={1.5} />
		</FixedContainer>
	);
};
export default memo(Splash);
