import React, {useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {itemPlay} from '../../store/actions';

const Track =  (props) => {
    useEffect(() => {
        console.log('props.track.id', props.track)
    }, [])
    const clickPlay = () => {
        props.onItemPlay(props.id);
    }
    return(
        <TouchableOpacity style={styles.row} onPress={() => clickPlay()}>
            <View style={styles.cell}>
                <Text style={(props.id != ((props.track !== null) ? props.track.id : -1)) ? styles.index : {color: 'green', fontWeight: 'bold'}}>{props.index}</Text>
            </View>
            <View style={[styles.cell, { flex: 1 }]}>
                <Text style={(props.id != ((props.track !== null) ? props.track.id : -1)) ? styles.name : {color: 'green', fontWeight: 'bold'}}>{props.title}</Text>
                <Text style={styles.artist}>{props.artist}</Text>
            </View>
            <View style={styles.cell}>
                <Icon name="linear-scale" color="#b2b3b4" size={24} />
            </View>
        </TouchableOpacity>
    )
};

const mapStateToProps = (state) => {
    return{
        track: state.playerReducer.track
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        onItemPlay: (id) => {
            dispatch(itemPlay(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Track);
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        backgroundColor: "black",
    },
    cell: {
        padding: 16,
        justifyContent: "center",
    },
    index: {
        color: "#b2b3b4",
    },
    artist: {
        color: "#b2b3b4",
    },
    name: {
        color: "white"

    },
});
