import React, {useRef, useState, useEffect}  from 'react';
import {View, Text, NativeModules, TouchableOpacity, ScrollView, Dimensions, StyleSheet} from 'react-native';
import { Pages } from 'react-native-pages';
import PlayerScreen from '../PlayScreen/PlayerScreen';
import PlaylistRecommend from '../PlaylistRecommend/PlaylistRecommend';
import LyricScreen from '../PlayScreen/LyricScreen';
const { StatusBarManager } = NativeModules;
import { Modalize } from 'react-native-modalize';
import ModalTabView from '../ModalTabView';
import IconIon from 'react-native-vector-icons/Ionicons';
import PageControl from 'react-native-page-control';
import ContentModalizeInfo from '../ModalTabView/ContentModalizeInfo';

const {width} = Dimensions.get('window');
const TabPages = (props) => {
    const modalizeRef = useRef(null);
    const modalizeRefSecond = useRef(null)
    const [currentPage, setCurrentPage] = useState(0);

    // useEffect(() => {
    //     console.log('onPress', props)
    // }, [])
    const onOpen = () => {
        modalizeRefSecond.current?.open();
    };
    const onScroll = (event) =>{
        let offsetX = event.nativeEvent.contentOffset.x,
            pageWidth = width - 10;
        setCurrentPage(Math.floor((offsetX - pageWidth / 2) / pageWidth) + 1)
    };

    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <View style={styles.tabPage}>
                    <TouchableOpacity style={styles.boxIcon} onPress={props.onPress}>
                        <IconIon style={styles.icon} name='chevron-down-outline' />
                    </TouchableOpacity>
                    <View style={styles.boxIcon}>
                        <PageControl
                            numberOfPages={3}
                            currentPage={currentPage}
                            hidesForSinglePage
                            pageIndicatorTintColor='#C4C4C4'
                            indicatorSize={{ width:30, height:5 }}
                            currentPageIndicatorTintColor='#000'
                            // onPageIndicatorPress={onItemTap}
                        />
                    </View>
                    <TouchableOpacity style={[styles.boxIcon, {alignItems: 'flex-end'}]} onPress={onOpen}>
                        <IconIon style={styles.icon} name='ellipsis-horizontal-sharp' />
                    </TouchableOpacity>

                </View>
                <ScrollView
                    // ref="ad"
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    onScroll={onScroll}
                    scrollEventThrottle={16}
                    >
                            <PlayerScreen />
                            <LyricScreen />
                            <PlaylistRecommend />
                </ScrollView>
                {/*<View style={{ position:'absolute', left:0, right:0, top: 10, justifyContent: 'center' }}>*/}
                {/*    <PageControl*/}
                {/*        numberOfPages={3}*/}
                {/*        currentPage={currentPage}*/}
                {/*        hidesForSinglePage*/}
                {/*        pageIndicatorTintColor='#C4C4C4'*/}
                {/*        indicatorSize={{ width:30, height:7 }}*/}
                {/*        currentPageIndicatorTintColor='#000'*/}
                {/*        onPageIndicatorPress={onItemTap}*/}
                {/*    />*/}
                {/*</View>*/}
            </View>
            {/*<Pages containerStyle={{flex: 1}} startPage={1} indicatorPosition={'top'} indicatorColor={'#000'}>*/}
            {/*    <PlaylistRecommend />*/}
            {/*    <PlayerScreen />*/}
            {/*    <LyricScreen />*/}
            {/*</Pages>*/}
            <Modalize
                ref={modalizeRefSecond}
                adjustToContentHeight={true}
            >
                <ContentModalizeInfo />
            </Modalize>
            <Modalize ref={modalizeRef} alwaysOpen={70}
                      modalStyle={{
                          shadowColor: '#000',
                          shadowOffset: { width: 0, height: 6 },
                          shadowOpacity: 0.45,
                          shadowRadius: 16,
                          borderColor: '#C7C7C7'
                      }}
                      handlePosition="inside">
                <ModalTabView />
            </Modalize>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBarManager.HEIGHT || 0,
    },
    tabPage: {
        flexDirection: 'row',
        paddingHorizontal: 18,
        marginBottom: 25
    },
    boxIcon: {
        flex:1,
        justifyContent: 'center'
    },
    icon: {
        fontSize: 30,
        color: 'rgba(0, 0, 0, 0.7)'
    }
})
export default TabPages;

