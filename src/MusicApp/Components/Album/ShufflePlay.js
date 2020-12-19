import * as React from "react";
import {
    View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity
} from "react-native";
import {connect} from 'react-redux';
import {setUserPlaying, setReplay, setShuffle} from '../../store/actions';

export const BUTTON_HEIGHT = 48;
export const BUTTON_WIDTH = 200;

const ShufflePlay = (props) => (
    <TouchableOpacity onPress={() => props.onSetShuffle(!props.shuffle)}>
        <View style={[styles.button, {
            backgroundColor: "#F06966",
            borderColor: "#fff",
        }]}>
            <Text style={[styles.label, {
                color: "#fff",
            }]}>{(props.shuffle) ? 'Bỏ phát ngẫu nhiên' : 'Phát ngẫu nhiên'}</Text>
        </View>
    </TouchableOpacity>
);

const mapStateToProps = (state) => {
    return{
        shuffle: state.playerReducer.shuffle
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        onSetShuffle: (val) => {
            dispatch(setShuffle(val))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShufflePlay)
const styles = StyleSheet.create({
    button: {
        alignSelf: "center",
        borderWidth: 1,
        height: BUTTON_HEIGHT,
        width: BUTTON_WIDTH,
        borderRadius: 32,
        justifyContent: "center",
    },
    label: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "600",
    },
});
