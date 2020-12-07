import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Provider} from 'react-redux';

import Album from './src/MusicApp/Components/Album';
import BottomTab from './src/MusicApp/Components/BottomTab';
import store from './src/MusicApp/store'

const App = () => {
    return (
        <Provider store={store}>
            <View style={{flex: 1}}>
                <Album />
                <BottomTab />
            </View>
        </Provider>
  );
};

export default App;
