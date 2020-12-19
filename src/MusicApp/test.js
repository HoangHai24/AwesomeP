import React, {useState, useRef} from 'react';
import { ScrollView, View, StyleSheet, Text, Dimensions} from 'react-native';
import PageControl from 'react-native-page-control';
const {width} = Dimensions.get('window');

const Test = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const onScroll = (event) =>{
        let offsetX = event.nativeEvent.contentOffset.x,
            pageWidth = width - 10;
        setCurrentPage(Math.floor((offsetX - pageWidth / 2) / pageWidth) + 1)
    };
    const onItemTap = (index) => {
        alert(index);
    };
    return(
        <View style={styles.container}>
            <View style={{backgroundColor:'red', width: width - 10, marginLeft:5,height: 160}}>
                <ScrollView
                    // ref="ad"
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    onScroll={onScroll}
                    scrollEventThrottle={16}
                >
                    <View style={{width: width-10,  height:164}}>
                        <Text>page1</Text>
                    </View>
                    <View style={{width: width-10,  height:164,backgroundColor:'yellow'}}>
                        <Text>page2</Text>
                    </View>
                    <View style={{width: width-10,  height:164,backgroundColor:'blue'}}>
                        <Text>page3</Text>
                    </View>
                </ScrollView>
                <PageControl
                    style={{ position:'absolute', left:0, right:0, top: 10 }}
                    numberOfPages={3}
                    currentPage={currentPage}
                    hidesForSinglePage
                    pageIndicatorTintColor='#C4C4C4'
                    indicatorSize={{ width:30, height:7 }}
                    currentPageIndicatorTintColor='#000'
                    onPageIndicatorPress={onItemTap}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollView: {
        backgroundColor:'yellow'
    }
});
export default Test;
