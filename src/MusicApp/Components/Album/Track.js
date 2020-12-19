import React, {useEffect, useRef} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {itemPlay} from '../../store/actions';
import IconIon from 'react-native-vector-icons/Ionicons';

const Track =  (props) => {
    const clickPlay = () => {
        props.onItemPlay(props.id);
    }

    return(
        // <TouchableOpacity style={styles.row} onPress={() => clickPlay()}>
        //     <View style={styles.cell}>
        //         <Text style={(props.id != ((props.track !== null) ? props.track.id : -1)) ? styles.index : {color: 'green', fontWeight: 'bold'}}>{props.index}</Text>
        //     </View>
        //     <View style={[styles.cell, { flex: 1 }]}>
        //         <Text style={(props.id != ((props.track !== null) ? props.track.id : -1)) ? styles.name : {color: 'green', fontWeight: 'bold'}}>{props.title}</Text>
        //         <Text style={styles.artist}>{props.artist}</Text>
        //     </View>
        //     <View style={styles.cell}>
        //         <Icon name="linear-scale" color="#b2b3b4" size={24} />
        //     </View>
        // </TouchableOpacity>
        <TouchableOpacity style={[styles.container, {backgroundColor: (props.track !== null && props.track.id === props.id) ? 'rgba(0, 0, 0, 0.25)' : '#fff'}]} onPress={clickPlay}>
            <Image
                style={styles.image}
                source={props.artwork}
            />
            <View style={styles.viewText}>
                <Text style={styles.trackName}>{props.title}</Text>
                <Text style={styles.artist}>{props.artist}</Text>
            </View>
            <TouchableOpacity style={{justifyContent: 'center'}}>
                <IconIon style={styles.moreInfo} name='ellipsis-vertical-sharp' />
            </TouchableOpacity>
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
    container: {
        height: 57,
        flexDirection: 'row',
        marginBottom: 10,
        paddingHorizontal: 20
    },
    image: {
        width:55,
        height: 55,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginRight: 12
    },
    viewText: {
        flex: 1,
        paddingTop: 7
    },
    trackName: {
        marginBottom: 4,
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.7)',
        fontWeight: 'bold'
    },
    artist: {
        fontSize: 12,
        fontWeight: '300',
        color: 'rgba(0, 0, 0, 0.7)'
    },
    moreInfo: {
        fontSize: 25,
        color: 'rgba(0, 0, 0, 0.7)'
    },
});
