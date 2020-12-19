import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Comment = (props) => {
    const renderLike = (numberLike) => {
        if (numberLike > 0){
            return (
                <View style={styles.boxHeart}>
                    <Icon style={styles.heart} name="heart" />
                    <View style={{justifyContent: 'center'}}>
                        <Text style={styles.numberLike}>{numberLike}</Text>
                    </View>
                </View>
            )
        }
    }

    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={props.item.img}
            />
            <View style={{flex: 1, marginLeft: 8}}>
                <View style={styles.midCon}>
                    <View style={styles.colOne}>
                        <Text style={styles.name}>{props.item.name}</Text>
                    </View>
                    <Text style={styles.textContent}>{props.item.content}</Text>
                    {/*{renderLike(props.item.numberLike)}*/}
                </View>
                <View style={{flexDirection: 'row', position: 'relative'}}>
                    <View style={styles.boxLikeRep}>
                        <Text style={styles.like}>Thích</Text>
                        <Text style={styles.like}>Trả lời</Text>
                        <Text style={styles.time}>{props.item.time}</Text>
                    </View>
                    {renderLike(props.item.numberLike)}
                </View>

            </View>
        </View>
    )
}

export default Comment;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 12
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 40
    },
    midCon: {
        alignSelf: 'baseline',
        // width: 'auto',
        paddingTop: 8,
        paddingLeft: 8,
        paddingBottom: 12,
        paddingRight: 12,
        backgroundColor: '#ECECEC',
        borderRadius: 10,
    },
    colOne: {
        flexDirection: 'row',
        marginBottom: 3
    },
    name: {
        color: 'rgba(0, 0, 0, 0.7)',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10
    },
    time: {
        color: 'rgba(0, 0, 0, 0.7)',
        fontSize: 11,
        fontWeight: '300'
    },
    textContent: {
        color: 'rgba(0, 0, 0, 0.7)',
    },
    boxLikeRep: {
        flexDirection: 'row',
        marginTop: 5,
        paddingHorizontal: 8,
        flex: 1,

    },
    like: {
        color: 'rgba(0, 0, 0, 0.7)',
        fontSize: 11,
        fontWeight: '600',
        marginRight: 13
    },
    boxHeart: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor: '#fff',
        alignSelf: 'baseline',
        borderRadius: 10,

        position: 'absolute',
        bottom: 0,
        right: 10,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    heart: {
        color: '#F06966',
        marginRight: 3,
        fontSize: 15
    },
    numberLike: {
        fontWeight: '500',
        fontSize: 11
    }
})
