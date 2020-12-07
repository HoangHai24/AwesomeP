import React, {useEffect} from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity, View } from "react-native";
// import { Feather as Icon } from "@expo/vector-icons";
import {connect} from 'react-redux';
import {itemPlay, setUserPlaying} from '../store/actions';
import Icon from 'react-native-vector-icons/AntDesign';

interface MiniPlayerProps {
    onPress: () => void;
    value: '',
    track: null,
    state: null,
    onSetUserPlaying: null
}

const MiniPlayer = ({onPress, track, state, onSetUserPlaying}: MiniPlayerProps) => {
    // console.log('value', value, track);
    // return (
    //     <TouchableWithoutFeedback onPress={onPress} >
    //         <View style={styles.container}>
    //             <Icon name="hearto" color="white" size={24} />
    //             {/*<Text style={{color: '#fff'}}>Like</Text>*/}
    //             <Text style={styles.text}>Track</Text>
    //             {/*{renderState()}*/}
    //             {/*<Text style={{color: '#fff'}}>{props.state}</Text>*/}
    //         </View>
    //     </TouchableWithoutFeedback>
    // )
    useEffect(() => {
        console.log('MiniPlayer track', track);
    }, [track])
    const renderState = () => {
        if (state === 'playing'){
            return (
                <TouchableOpacity onPress={() => onSetUserPlaying(false)}>
                    <Icon name="pausecircleo" color="green" size={24} />
                </TouchableOpacity>
            )
        }
        else return (
                <TouchableOpacity onPress={() => onSetUserPlaying(true)}>
                    <Icon name="playcircleo" color="white" size={24} />
                </TouchableOpacity>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Icon name="hearto" color="white" size={24} />
                {/*<Text style={{color: '#fff'}}>Like</Text>*/}
                <Text style={styles.text}>{(track !== null) ? track.title : null}</Text>
                {renderState()}
                {/*<Text style={{color: '#fff'}}>{props.state}</Text>*/}
            </View>
        </TouchableWithoutFeedback>
    );
};
const mapStateToProps = (state) => {
    return{
        track: state.playerReducer.track,
        state: state.playerReducer.state
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        onSetUserPlaying: (bol) => {
            dispatch(setUserPlaying(bol))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MiniPlayer);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#272829",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16
    },
    text: {
        color: "green",
        fontSize: 18,
        fontWeight: 'bold'
    }
});
