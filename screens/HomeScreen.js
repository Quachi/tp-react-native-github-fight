import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {Start} from "../components/Start";


export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <View style={styles.container}>
                <Start/>
                <Text style={styles.textHome}>Compare Github's repo with yours pairs</Text>
                <TouchableOpacity style={styles.btnStart} onPress={() => this.props.navigation.navigate('Game')}>
                    <Text style={styles.textHome}>Start</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    btnStart: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        margin: 20,
    },
    textHome: {
        fontSize: 28,
        fontWeight: 'bold'
    }
});
