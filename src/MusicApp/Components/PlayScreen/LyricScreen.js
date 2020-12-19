import React, {useRef, useEffect, useState} from 'react';
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    ScrollView, FlatList, Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import ComponentController from './ComponentController';

const {width} = Dimensions.get('window');
const LyricScreen = (props) => {

    const [songIndex, setSongIndex] = useState(0);

    const renderLyric = () => {
        return(
            <View style={[styles.boxLyric, {height: width + 25}]}>
                {/*<LinearGradient*/}
                {/*    start={{x: 0, y: 0}}*/}
                {/*    end={{x: 0, y: 0.5}}*/}
                {/*    locations={[0.3,0.7,1]}*/}
                {/*    colors={['#cecece', '#fff', '#cecece']}*/}
                {/*>*/}
                <ScrollView showsVerticalScrollIndicator ={false}>
                        <Text style={styles.textLyric}>Lately, I've been, I've been losing sleep
                            Dreaming about the things that we could be
                            But baby, I've been, I've been praying hard
                            Said no more counting dollars
                            We'll be counting stars
                            Yeah, we'll be counting stars
                            I see this life, like a swinging vine
                            Swing my heart across the line
                            And in my face is flashing signs
                            Seek it out and ye shall find
                            Old, but I'm not that old
                            Young, but I'm not that bold
                            And I don't think the world is sold
                            On just doing what we're told
                            I feel something so right
                            Doing the wrong thing
                            And I feel something so wrong
                            Doing the right thing
                            I couldn't lie, couldn't lie, couldn't lie
                            Everything that kills me makes me feel alive
                            Lately, I've been, I've been losing sleep
                            Dreaming about the things that we could be
                            But baby, I've been, I've been…
                        </Text>
                </ScrollView>
                {/*</LinearGradient>*/}

            </View>

        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{width: '100%', paddingHorizontal: 20}}>
                {renderLyric()}
            </View>
            <ComponentController />
        </SafeAreaView>
    );
}
const mapStateToProps = (state) => {
    return{
        track: state.playerReducer.track
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        // onItemPlay: (id) => {
        //   dispatch(itemPlay(id))
        // }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LyricScreen)
const styles = StyleSheet.create({
    container: {
        // justifyContent: 'space-evenly',
        alignItems: 'center',
        // flex: 1,
        width: width
    },
    boxLyric: {
        paddingHorizontal: 20,
        marginBottom: 25,
        // backgroundColor: '#fff',
        // shadowColor: "rgba(0,0,0,0.2)",
        // shadowOffset: {
        //     width: 0,
        //     height: 10,
        // },
        // shadowOpacity: 0.32,
        // shadowRadius: 5.46,
        // elevation: 9,
        borderWidth: 0.2,
        borderRadius: 10,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    textLyric: {
        fontSize: 22,
        color: 'rgba(0, 0, 0, 0.8)',
        textAlign: 'center',
        fontWeight: '600',
        lineHeight: 40
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: 'rgba(0, 0, 0, 0.7)',
    },
    artist: {
        fontSize: 14,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.7)',
        textTransform: 'capitalize',
    },
    timers: {
        color: '#fff',
        fontSize: 16,
    },
    timeContainer: {
        flexDirection: 'row',
        width: 150,
        justifyContent: 'space-between',
    },
});

