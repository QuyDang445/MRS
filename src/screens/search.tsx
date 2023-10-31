import {Image, ScrollView, StyleSheet, Text, TextInput, View,RefreshControl,ActivityIndicator,FlatList,TouchableOpacity} from 'react-native';
import React, {useState, useRef,useEffect} from 'react';
import FixedContainer from '../components/fixed-container';
import CustomHeader from '../components/custom-header';
import CustomText from '../components/custom-text';
import {RootStackScreenProps} from '../navigator/stacks';
import Filter,{Sort} from '../components/search/filter';
import Star from '../components/star';
import {colors} from '../styles/colors';
import {ICONS} from '../assets/image-paths';
import {widthScale,heightScale} from '../styles/scaling-utils';
import {generateRandomId, getServiceAll} from '../utils';
import Logger from '../utils/logger';
import {ROUTE_KEY} from '../navigator/routers';
import {FONT_FAMILY} from '../constants/enum';
import {ServiceProps} from '../constants/types';
import {sleep} from '../utils/time';

const sort = [
	{title: 'Đánh giá tăng dần', id: '333', function: (a: any, b: any) => a?.star - b?.star},
	{title: 'Đánh giá giảm dần', id: '444', function: (a: any, b: any) => b?.star - a?.star},
];
const Search = (props: RootStackScreenProps<'Search'>) => {
	const {navigation, route} = props;
	const categories = route.params.categories;

	const [textSearch, setTextSearch] = useState('');
	const [isShow, setIsShow] = useState(false);
	const [serviceAll, setServiceAll] = useState<ServiceProps[]>(route.params.data);
	const [refreshing, setRefreshing] = useState(false);
	const [loading, setLoading] = useState(false);
	const [sortData, setSortData] = useState('');

	const [filter, setFilter] = useState('');
	const [isShowFilter, setIsShowFilter] = useState(false);


	const allServiceRef = useRef<ServiceProps[]>(route.params.data);

	useEffect(() => {
		const all = {id: 'ALL', name: 'Tất cả'};
		const newCategories = [all, ...categories] as any;
		setFilter(newCategories);
	}, []);

	const onRefresh = async () => {
		setRefreshing(true);
		const data = await getServiceAll();
		allServiceRef.current = data;
		setRefreshing(false);
	};
	
	const onSearch = (text: string) => {
		setLoading(true);
		setTextSearch(text);

		const changeText = (_: string) =>
			_.toLowerCase()
				.normalize('NFD')
				.replace(/[\u0300-\u036f]/g, '');

		const newText = changeText(text);

		const newArr = [...allServiceRef.current];
		setServiceAll(newArr.filter(item => changeText(item?.name).includes(newText)));

		sleep(500).finally(() => setLoading(false));
	};
	const renderItemOutstandingService = ({item}: {item: ServiceProps}) => {
		return (
			<TouchableOpacity onPress={() => navigation.navigate(ROUTE_KEY.ServiceDetail, {serviceData: item})} style={[styles.itemService, {marginRight: 0}]}>
				<Image source={{uri: item?.image}} style={styles.imageService} />

				<View style={{flex: 1, padding: widthScale(15)}}>
					<CustomText numberOfLines={1} font={FONT_FAMILY.BOLD} text={item?.name} />
					<Star star={item.star} />
					<CustomText text={item.servicerObject.name} />
					<CustomText text={item.servicerObject.phone} />
				</View>
			</TouchableOpacity>
		);
	};
	return (
		<FixedContainer>
			<CustomHeader title="TÌM KIẾM" />
			<ScrollView
				refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refreshing} />}
				showsVerticalScrollIndicator={false}
				style={styles.view}>
				<View style={styles.viewInput}>
					<Image source={ICONS.search} style={styles.iconSearch} />
					<TextInput
						placeholderTextColor={colors.grayText}
						placeholder="Nhập thông tin cần tìm kiếm"
						autoFocus
						onChangeText={onSearch}
						style={styles.input}
						value={textSearch}
					/>
				</View>

				<Filter
					onPressShow={() => setIsShow(!isShow)}
					isOn={isShow}
					title="SẮP XẾP"
					filter={['Sắp xếp theo giá', 'Sắp xếp theo đánh giá', 'Sắp xếp theo']}
				/>

				<Filter
					onPressShow={() => setIsShowFilter(!isShowFilter)}
					isOn={isShowFilter}
					title="LỌC"
					filter={['Sắp xếp theo giá', 'Sắp xếp theo đánh giá', 'Sắp xếp theo']}
				/>

				{loading ? (
					<View style={{width: '100%', height: heightScale(200), justifyContent: 'center', alignItems: 'center'}}>
						<ActivityIndicator />
					</View>
				) : (
					<FlatList
						contentContainerStyle={{marginTop: heightScale(20)}}
						scrollEnabled={false}
						columnWrapperStyle={{justifyContent: 'space-between', marginBottom: heightScale(20)}}
						numColumns={2}
						keyExtractor={generateRandomId}
						showsHorizontalScrollIndicator={false}
						data={serviceAll}
						renderItem={renderItemOutstandingService}
						ListEmptyComponent={
							<View style={{marginTop: heightScale(50)}}>
								<CustomText style={{textAlign: 'center'}} color={colors.grayText} text={'Không có dịch vụ nào'} />
							</View>
						}
						showsVerticalScrollIndicator={false}
					/>
				)}
			</ScrollView>
		</FixedContainer>
	);
};

export default Search;
const styles = StyleSheet.create({
	viewInput: {
		borderRadius: 8,
		borderColor: colors.grayLine,
		borderWidth: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: widthScale(5),
	},
	iconSearch: {
		width: widthScale(20),
		height: widthScale(20),
	},
	input: {
		flex: 1,
		color: colors.black,
		fontFamily: FONT_FAMILY.REGULAR,
		fontSize: widthScale(15),
	},
	view: {
		marginHorizontal: widthScale(20),
	},
	imageService: {
		width: '100%',
		height: widthScale(100),
		alignSelf: 'center',
	},
	itemService: {
		width: widthScale(150),
		backgroundColor: `${colors.blackGray}10`,
		borderRadius: 10,
		marginRight: widthScale(15),
		overflow: 'hidden',
	},
});