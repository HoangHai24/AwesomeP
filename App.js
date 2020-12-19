import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';

import Album from './src/MusicApp/Components/Album';
import BottomTab from './src/MusicApp/Components/BottomTab';
import store from './src/MusicApp/store';
// import ModalTabView from './src/MusicApp/Components/ModalTabView';
import Test from './src/MusicApp/test'

const App = () => {
    return (
        <Provider store={store}>
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Album />
                <BottomTab />
                {/*<ModalTabView />*/}
                {/*<Test />*/}
            </View>
        </Provider>
  );
};

export default App;
