import React, {useEffect, useState, useRef} from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import TrackList from './TrackList';

const {width} = Dimensions.get('window');
const PlaylistRecommend = (props) => {
    return(
        <View style={{width: width}}>
            <FlatList
                data={props.playlist}
                renderItem={({item}) => (
                    <TrackList item={item} />
                )}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator ={false}
            />
        </View>
    )
}
const mapStateToProps = (state) => {
    return{
        playlist: state.playlistReducer.item
    }
}
export default connect(mapStateToProps)(PlaylistRecommend);
