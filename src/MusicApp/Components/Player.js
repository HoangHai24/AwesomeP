import React, {useEffect} from "react";
import {
    Dimensions,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { RectButton } from "react-native-gesture-handler";
import RNTrackPlayer from 'react-native-track-player';
import { connect } from 'react-redux';
import { incre } from '../store/actions';


const { width } = Dimensions.get("window");

interface PlayerProps {
    onPress: () => void;
}

const Player =  ({ onPress }: PlayerProps) => {


    return (
        <SafeAreaView style={styles.root}>
            <LinearGradient
                colors={["#0b3057", "#051c30"]}
                style={StyleSheet.absoluteFill}
            />
            <View style={styles.container}>

                <View style={styles.header}>
                    <RectButton style={styles.button} {...{ onPress }}>
                        <Text style={{color: '#fff'}}>chevron-down</Text>
                    </RectButton>
                    <Text style={styles.title}>The Bay</Text>
                    <RectButton style={styles.button} {...{ onPress }}>
                        <Text style={{color: '#fff'}}>more-horizontal</Text>
                    </RectButton>
                </View>
                <Image source={require("../../../assets/img/130327.jpg")} style={styles.cover} />
                <View style={styles.metadata}>
                    <View>
                        <Text style={styles.song}>The Bay</Text>
                        <Text style={styles.artist}>Metronomy</Text>
                    </View>
                    <Text style={{color: '#fff'}}>Like</Text>
                </View>
                <View style={styles.slider} />
                <View style={styles.controls}>
                    <Text style={{color: '#fff'}}>Tron bai</Text>
                    <Text style={{color: '#fff'}}>Bai truoc</Text>
                    <Text style={{color: '#fff'}}>Choi</Text>
                    <Text style={{color: '#fff'}}>Bai tiep</Text>
                    <Text style={{color: '#fff'}}>Lap bai</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const mapStateToProps = (state) => {
    return{
        times: state.counterReducer ? state.counterReducer : 0
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        onIncre: (step) => {
            dispatch(incre(step))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player);
const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    container: {
        margin: 16
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        padding: 16
    },
    title: {
        color: "white",
        padding: 16
    },
    cover: {
        marginVertical: 16,
        width: width - 32,
        height: width - 32
    },
    metadata: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    song: {
        fontSize: 32,
        fontWeight: "bold",
        color: "white"
    },
    artist: {
        color: "white"
    },
    slider: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        width: width - 32,
        borderRadius: 2,
        height: 4,
        marginVertical: 16
    },
    controls: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    }
});

