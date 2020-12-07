import React, {useEffect} from "react";
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Animated from "react-native-reanimated";
import { Album } from "./Model";
import Content from "./Content";
import Cover from "./Cover";
import {connect} from 'react-redux';
import {incre, initializePlayback, itemPlay} from '../../store/actions';

const { Value } = Animated;
const album: Album = {
    name: "Remote Control",
    artist: "Jan Blomqvist",
    release: 2016,
    cover: require("../../../../assets/img/mello5-2.jpeg"),
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
    const y = new Value(0);
    useEffect(() => {
        // props.onItemPlay(1,1);
        props.onInitializePlayback()
    }, [])
    return (
        <View style={styles.container}>
            <Cover {...{ y, album }} />
            <Content {...{ y, album }} />
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
        backgroundColor: "#333"
    }
});
