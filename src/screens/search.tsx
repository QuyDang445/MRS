import {Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import FixedContainer from '../components/fixed-container';
import CustomHeader from '../components/custom-header';
import {RootStackScreenProps} from '../navigator/stacks';
import Filter,{Sort} from '../components/search/filter';
import {colors} from '../styles/colors';
import {ICONS} from '../assets/image-paths';
import {widthScale} from '../styles/scaling-utils';

import {FONT_FAMILY} from '../constants/enum';
const sort = [
	{title: 'Đánh giá tăng dần', id: '333', function: (a: any, b: any) => a?.star - b?.star},
	{title: 'Đánh giá giảm dần', id: '444', function: (a: any, b: any) => b?.star - a?.star},
];
const Search = (props: RootStackScreenProps<'Search'>) => {
	const {navigation} = props;

	const [textSearch, setTextSearch] = useState('');
	const [isShow, setIsShow] = useState(false);

	return (
		<FixedContainer>
			<CustomHeader title="TÌM KIẾM" />
			<ScrollView showsVerticalScrollIndicator={false} style={styles.view}>
				<View style={styles.viewInput}>
					<Image source={ICONS.search} style={styles.iconSearch} />
					<TextInput autoFocus onChangeText={setTextSearch} style={styles.input} value={textSearch} placeholderTextColor={colors.grayText}
						placeholder="Nhập thông tin cần tìm kiếm" />
				</View>

				<Filter
					onPressShow={() => setIsShow(!isShow)}
					isOn={isShow}
					title="Sắp xếp"
					filter={['Sắp xếp theo giá', 'Sắp xếp theo đánh giá', 'Sắp xếp theo']}
				/>
				<Filter
					onPressShow={() => setIsShow(!isShow)}
					isOn={isShow}
					title="Lọc"
					filter={['Sắp xếp theo giá', 'Sắp xếp theo đánh giá', 'Sắp xếp theo']}
				/>
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