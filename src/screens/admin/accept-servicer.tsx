import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {DeviceEventEmitter, FlatList, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ICONS} from '../../assets/image-paths';
import CustomHeader from '../../components/custom-header';
import CustomText from '../../components/custom-text';
import FixedContainer from '../../components/fixed-container';
import {EMIT_EVENT, FONT_FAMILY} from '../../constants/enum';
import {UserProps} from '../../constants/types';
import {ROUTE_KEY} from '../../navigator/routers';
import {RootStackScreenProps} from '../../navigator/stacks';
import {colors} from '../../styles/colors';
import {heightScale, widthScale} from '../../styles/scaling-utils';
import {generateRandomId, getServicerALl} from '../../utils';

const AcceptServicer = (props: RootStackScreenProps<'AcceptServicer'>) => {
	const {navigation, route} = props;
    const [servicer, setServicer] = useState(route.params.data);
	const [refreshing, setRefreshing] = useState(false);

    const onPressDetailService = () => console.log("onPressDetailService ");


	const onRefresh = async () => {
		setRefreshing(true);
		const arr = [];
		const data = await getServicerALl();
		for (let i = 0; i < data.length; i++) {
			if (!data[i].isAccept) {
				arr.push(data[i]);
			}
		}
		arr.length && navigation.goBack();

		setServicer(arr);
		setRefreshing(false);
	};

	useEffect(() => {
		DeviceEventEmitter.addListener(EMIT_EVENT.LOAD_SERVICE_ACCEPT, onRefresh);
	}, []);

	return (
		<FixedContainer>
			<CustomHeader title="SÉT DUYỆT TÀI KHOẢN" />
			<FlatList
				onRefresh={onRefresh}
				refreshing={refreshing}
				keyExtractor={generateRandomId}
				contentContainerStyle={{padding: widthScale(20)}}
				data={servicer}
				renderItem={({item}) => (
					<TouchableOpacity
						
						style={{borderRadius: 5, borderWidth: 1, marginBottom: heightScale(20), padding: widthScale(10), flexDirection: 'row'}}>
						<View
							style={{
								borderRadius: 100,
								backgroundColor: `${colors.gray}80`,
								width: widthScale(70),
								height: widthScale(70),
								justifyContent: 'center',
								alignItems: 'center',
								marginRight: widthScale(10),
							}}>
							<Image style={{width: widthScale(50), height: widthScale(50)}} source={item.avatar ? {uri: item.avatar} : ICONS.user_accept} />
						</View>

						<View>
							<CustomText font={FONT_FAMILY.BOLD} text={item?.name} />
							<CustomText text={item?.phone} />
							<CustomText text={`Ngày đăng ký: ${moment(item?.dateRegister).format('DD/MM/YYYY')}`} />
						</View>
					</TouchableOpacity>
				)}
			/>
		</FixedContainer>
	);
};

export default AcceptServicer;
const styles = StyleSheet.create({});
