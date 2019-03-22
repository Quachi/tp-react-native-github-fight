import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

export default class GameScreen extends React.Component {
    static navigationOptions = {
        title: 'Game',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Game Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
