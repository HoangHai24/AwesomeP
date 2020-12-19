import * as React from "react";
import {
    StyleSheet, View, Text, FlatList, ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated from "react-native-reanimated";
import {onScrollEvent} from 'react-native-redash/lib/module/v1';
import songs from '../../data';
import {
    Album, MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT,
} from "./Model";
import Track from "./Track";
import ShufflePlay, { BUTTON_HEIGHT } from "./ShufflePlay";
import Header from "./Header";
import ArtistSame from '../ModalTabView/ArtistSame';
import artistSame from '../../artist';
import ListRecommend from '../ModalTabView/ListRecommend';

const trackSame = songs.slice(5, 10);
interface ContentProps {
    album: Album;
    y: Animated.Value<number>;
}

const {
    interpolate, Extrapolate,
} = Animated;

export default ({ album: { artist, tracks }, y }: ContentProps) => {
    const height = interpolate(y, {
        inputRange: [-MAX_HEADER_HEIGHT, -BUTTON_HEIGHT / 2],
        outputRange: [0, MAX_HEADER_HEIGHT + BUTTON_HEIGHT],
        extrapolate: Extrapolate.CLAMP,
    });
    const opacity = interpolate(y, {
        inputRange: [-MAX_HEADER_HEIGHT / 2, 0, MAX_HEADER_HEIGHT / 2],
        outputRange: [0, 1, 0],
        extrapolate: Extrapolate.CLAMP,
    });
    return (
        <Animated.ScrollView
            onScroll={onScrollEvent({ y })}
            style={styles.container}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={1}
            stickyHeaderIndices={[1]}
        >
            <View style={styles.cover}>
                <Animated.View
                    style={[styles.gradient, { height }]}
                >
                    <LinearGradient
                        style={StyleSheet.absoluteFill}
                        start={[0, 0.3]}
                        end={[0, 1]}
                        colors={["transparent", "rgba(0, 0, 0, 0.4)", "#fff"]}
                    />
                </Animated.View>
                <View style={styles.artistContainer}>
                    <Animated.Text style={[styles.artist, { opacity }]}>Slow Love</Animated.Text>
                    <Animated.Text style={{fontSize: 15, fontWeight: '500', color: 'rgba(0, 0, 0, 0.7)'}}>30 bài hát . Bởi Music App . 316k lượt thích </Animated.Text>
                </View>
            </View>
            <View style={styles.header}>
                {/*<Header {...{ y, artist }} />*/}
                <ShufflePlay />
            </View>
            <View style={styles.tracks}>
                {
                    songs.map((track, key) => {
                        return(
                        <Track index={key + 1} title={track.title} id={(track !== null) ? track.id : -1} artist={track.artist} artwork={track.artwork} />
                    )})
                }
            </View>
            <View style={styles.playlistMore}>
                <Text style={styles.titPlaylistMore}>Nghệ sĩ đóng góp </Text>
                <FlatList
                    horizontal={true}
                    data={artistSame}
                    renderItem={({item}) => (
                        <ArtistSame item={item} />
                    )}
                    keyExtractor={item => item.name}
                    showsHorizontalScrollIndicator ={false}
                />
                <Text style={styles.titPlaylistMore}>Playlist tương tự</Text>
                <FlatList
                    horizontal={true}
                    data={trackSame}
                    renderItem={({item}) => (
                        <ListRecommend item={item} />
                    )}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator ={false}
                />
                <View style={{height: 170}}></View>
            </View>
        </Animated.ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: MIN_HEADER_HEIGHT - BUTTON_HEIGHT / 2,
    },
    cover: {
        height: MAX_HEADER_HEIGHT - BUTTON_HEIGHT,
    },
    gradient: {
        position: "absolute",
        left: 0,
        bottom: 0,
        right: 0,
        alignItems: "center",
    },
    artistContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center",
    },
    artist: {
        textAlign: "center",
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
    },
    header: {
        marginTop: -BUTTON_HEIGHT,
    },
    tracks: {
        paddingTop: 32,
        backgroundColor: "#fff",
    },
    playlistMore: {
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    titPlaylistMore: {
        color: 'rgba(0,0,0,0.7)',
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 20
    }
});
