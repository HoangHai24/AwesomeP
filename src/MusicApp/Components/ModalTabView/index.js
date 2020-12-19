import React, {useState} from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import InfomationMore from './InfomationMore';
import CmtTrack from './CmtTrack';

const initialLayout = { width: Dimensions.get('window').width };

const ModalTabView = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'THÔNG TIN' },
        { key: 'second', title: 'BÌNH LUẬN' },
    ]);

    const renderScene = SceneMap({
        first: InfomationMore,
        second: CmtTrack,
    });

    const renderTabBar  = (props) => {
        return(
            <TabBar
                {...props}
                renderLabel={({ route }) => (
                    <Text style={styles.textLabel}>
                        {route.title}
                    </Text>
                )}
                indicatorStyle={styles.indicator}
                indicatorContainerStyle={styles.indicatorContainer}
                style={styles.tabBar}
            />

        )
    }
    return (
        <View style={{marginTop: 10, flex: 1}}>
            <TabView
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
            />
        </View>

    );
}
export default ModalTabView;
const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    tabBar: {
        backgroundColor: '#fff',
        // alignItems: 'center'
    },
    textLabel: {
        color: 'rgba(0, 0, 0, 0.6)',
        margin: 8,
        fontSize: 18,
        fontWeight: '500'
    },
    indicatorContainer: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0
    },
    indicator: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        height: 3,
        // width: 100,
        borderRadius: 5
    }
});
