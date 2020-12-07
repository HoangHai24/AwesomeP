import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Album from './Components/Album';
import BottomTab from './Components/BottomTab';
import { connect } from 'react-redux';
import {incre} from './store/actions';
const HomeMusic = (props) => {
    return(
        <View style={{flex: 1}}>
            <TouchableOpacity style={{height: 100, backgroundColor: '#333', paddingTop: 30}} onPress={() => {props.onIncre(1)}}>
                <Text style={{color: '#fff'}}>INCREMENT</Text>
                <Text style={{color: '#fff'}}>{props.times}</Text>
            </TouchableOpacity>
            <Album />
            <BottomTab />
        </View>
    )
}
// const mapStateToProps = (state) => {
//     return{
//         times: state.counterReducer ? state.counterReducer : 0
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return{
//         onIncre: (step) => {
//             dispatch(incre(step))
//         }
//     }
// }
export default connect(mapStateToProps, mapDispatchToProps)(HomeMusic);
