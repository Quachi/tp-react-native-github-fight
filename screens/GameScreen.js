import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import {FormPlayer} from "../components/FormPlayer";
import {Player} from "../components/Player";
import {ButtonBattle} from "../components/ButtonBattle";

export default class GameScreen extends React.Component {
    static navigationOptions = {
        title: 'Game',
    };

    constructor(props) {
        super(props);
        this.state = {
            player1: {},
            player2: {}
        }
    }

    setPlayer = (number, user) => {
        (number === 1 ? this.setState({player1: user}) : this.setState({player1: user}))
    }

    render() {
        return (
            <View style={styles.container}>
                <Player number={1} handler={this.setPlayer}/>
                <ButtonBattle/>
                <Player number={2} handler={this.setPlayer}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
});
