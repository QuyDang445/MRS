import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {RootStackScreenProps} from '../navigator/stacks';
import FixedContainer from '../components/fixed-container';
import CustomHeader from '../components/custom-header';
import {heightScale, widthScale} from '../styles/scaling-utils';
import CustomText from '../components/custom-text';
import {ICONS} from '../assets/image-paths';
import {FONT_FAMILY} from '../constants/enum';
import {generateRandomId} from '../utils';
import {colors} from '../styles/colors';
import {ROUTE_KEY} from '../navigator/routers';
import {useLanguage} from '../hooks/useLanguage';

const Payment = (props: RootStackScreenProps<'Payment'>) => {
	const text = useLanguage().Payment;
	const {navigation} = props;

	//const onPressEditFee = () => navigation.navigate(ROUTE_KEY.EditPaymentFee);
	//const onPressAddPayment = () => navigation.navigate(ROUTE_KEY.AddPayment);

	return (
		<FixedContainer>
			<CustomHeader
				title={text.title}
				// rightContent={
				// 	<TouchableOpacity onPress={onPressAddPayment}>
				// 		<Image style={styles.icon} source={ICONS.add} />
				// 	</TouchableOpacity>
				// }
			/>

			<ScrollView style={styles.view}>
				<View style={styles.viewContent}>
					<CustomText font={FONT_FAMILY.BOLD} text={text.feeservicer} rightContent={<CustomText text={text.payfees} />} />
					{/* <TouchableOpacity onPress={onPressEditFee}>
						<Image style={styles.icon} source={ICONS.edit} />
					</TouchableOpacity> */}
				</View>

				{[1, 1, 1].map(() => (
					<View
						key={generateRandomId()}
						style={{marginBottom: heightScale(10), backgroundColor: `${colors.gray}80`, padding: 5, borderRadius: 5}}>
						<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
							<CustomText font={FONT_FAMILY.BOLD} text={text.bank} rightContent={<CustomText text={text.bankname} />} />
							<TouchableOpacity>
								<Image style={styles.icon} source={ICONS.edit} />
							</TouchableOpacity>
						</View>
						<View
							style={{
								alignSelf: 'center',
								width: widthScale(200),
								height: 1,
								backgroundColor: colors.gray,
								borderRadius: 100,
								marginVertical: heightScale(5),
							}}
						/>
						<CustomText font={FONT_FAMILY.BOLD} text={text.numberaccount} rightContent={<CustomText text={'19035244530019'} />} />
						<CustomText font={FONT_FAMILY.BOLD} text={text.nameaccount} rightContent={<CustomText text={'Nguyen A'} />} />
						<CustomText font={FONT_FAMILY.BOLD} text={text.descriptsion} rightContent={<CustomText text={'SoDienThoai_TenNguoiDongPhi'} />} />

						<Image
							resizeMode="contain"
							source={{
								uri: 'https://lh3.googleusercontent.com/yvncsZNeUIj7k_GkJU1wIJKnZI_TH2VeTuo7ujeqRTSzWM0ZtyyOlR6R7sodUdsEOuGVT5aeRVMhLThDgycayr5_cS-IniQet6YBzbhKfNO4Ofq0WZul-M0owBavh3oyJTpDrABx',
							}}
							style={{width: widthScale(250), height: heightScale(400), alignSelf: 'center'}}
						/>
					</View>
				))}
			</ScrollView>
		</FixedContainer>
	);
};

export default memo(Payment);
const styles = StyleSheet.create({
	view: {
		paddingHorizontal: widthScale(20),
	},
	viewContent: {
		marginVertical: heightScale(20),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	icon: {
		width: widthScale(20),
		height: widthScale(20),
	},
});
