import React from 'react';
import {Text, SafeAreaView, View, FlatList} from "react-native";
import {FocusedStatusBar, HomeHead, NTFCard} from "../components";
import {COLORS, NFTData} from "../constants";

const Home = (props) => {
	return (
		<SafeAreaView style={{flex: 1}}>
			<FocusedStatusBar background={COLORS.primary} />

			<View style={{flex: 1}}>
				<View style={{zIndex: 0}}>
					<FlatList
						data={NFTData}
						renderItem={({item}) => <NTFCard data={item} />}
						keyExtractor={(item) => item.id}
						showsVerticalScrollIndicator={false}
						ListHeaderComponent={<HomeHead />}
					/>
				</View>
				<View
					style={{
						position: "absolute",
						top: 0,
						bottom: 0,
						right: 0,
						left: 0,
						zIndex: -1,
					}}>
						<View style={{height: 300, backgroundColor: COLORS.primary}} />
						<View style={{flex: 1, backgroundColor: COLORS.white}} />
				</View>
			</View>
		</SafeAreaView>
	)
};

export default Home;