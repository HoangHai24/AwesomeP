import React from 'react';
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const InputCmt = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.viewCmt}>
                    <Image
                        style={styles.image}
                        source={require('../../../../assets/img/Adam-Levine-1.jpg')}
                    />
                    <View style={styles.formInput}>
                        <TextInput placeholder="Nhập bình luận ... " style={styles.textInput} />
                    </View>
                    <Icon name='send-circle' style={styles.iconSend}/>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginBottom: 20,
    },
    viewCmt: {
        flexDirection: 'row',
        height: 40,

    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 40
    },
    textInput: {
        height: 40,
        paddingLeft: 19
    },
    formInput: {
        flex: 1,
        marginHorizontal: 3,
        backgroundColor: '#ECECEC',
        height: 40,
        borderRadius: 44
    },
    iconSend: {
        fontSize: 40,
        color: 'rgba(0,0,0, 0.7)'
    }
});

export default InputCmt;
