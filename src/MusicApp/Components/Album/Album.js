import React, {useEffect, useRef} from "react";
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Animated from "react-native-reanimated";
import { Album } from "./Model";
import Content from "./Content";
import Cover from "./Cover";
import {connect} from 'react-redux';
import {incre, initializePlayback, itemPlay} from '../../store/actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIon from 'react-native-vector-icons/Ionicons';
import { Modalize } from 'react-native-modalize';
import ContentModalizeInfo from '../ModalTabView/ContentModalizeInfo';


const { Value } = Animated;
const album: Album = {
    name: "Remote Control",
    artist: "Jan Blomqvist",
    release: 2016,
    cover: require("../../../../assets/img/Nike-Air-Jordan-4-Retro-Off-White-sail-1.jpg"),
    tracks: [
        { name: "Stories Over" },
        { name: "More", artist: "Jan Blomqvist, Elena Pitoulis" },
        { name: "Empty Floor" },
        { name: "Her Great Escape" },
        { name: "Dark Noise" },
        { name: "Drift", artist: "Jan Blomqvist, Aparde" },
        { name: "Same Mistake" },
        {
            name: "Dancing People Are Never Wrong",
            artist: "Jan Blomqvist, The Bianca Story"
        },
        { name: "Back in the Taxi" },
        { name: "Ghosttrack" },
        { name: "Just OK" },
        { name: "The End" }
    ]
};

const Alb = (props) => {
    const modalizeRef = useRef(null);
    const y = new Value(0);
    useEffect(() => {
        props.onInitializePlayback()
    }, []);
    const onOpen = () => {
        modalizeRef.current?.open();
    };
    return (
        <View style={styles.container}>
            <View style={styles.tabHeader}>
                <TouchableOpacity style={{flex: 1}} onPress={() => alert('back')}>
                    <Icon name='arrow-left-circle' size={30} color='#fff'/>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', flex: 1, justifyContent: 'flex-end'}}>
                    <Icon name='heart-circle-outline' size={30} color='#fff' onPress={() => alert('like playlist')} />
                    <IconIon style={{marginLeft: 10}} color='#fff' size={30} name='ellipsis-vertical-sharp' onPress={onOpen}/>
                </View>
            </View>

            <Cover {...{ y, album }} />
            <Content {...{ y, album }} />
            <Modalize
                ref={modalizeRef}
                adjustToContentHeight={true}
            >
                <ContentModalizeInfo />
            </Modalize>
        </View>
    );
};
const mapStateToProps = (state) => {
    return{
        times: state.counterReducer ? state.counterReducer : 0,
        playlist: state.playlistReducer

    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        onIncre: (step) => {
            dispatch(incre(step))
        },
        onInitializePlayback: () => {
            dispatch(initializePlayback())
        },
        onItemPlay: (id, playid) => {
            dispatch(itemPlay(id, playid))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Alb);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    tabHeader: {
        position: 'relative',
        top: 40,
        height: 30,
        width: '100%',
        zIndex: 1,
        flexDirection: 'row',
        paddingHorizontal: 20
    }
});
