import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import {FormPlayer} from "../components/battle-components/FormPlayer";
import {Player} from "../components/battle-components/Player";
import {ButtonBattle} from "../components/battle-components/ButtonBattle";
import {ResultBattle} from "../components/battle-components/ResultBattle";

export default class GameScreen extends React.Component {
    static navigationOptions = {
        title: 'Game',
    };

    constructor(props) {
        super(props);
        this.state = {
            player1: {},
            player2: {},
            resultFight: false
        }
    }

    setPlayer = (number, user) => {
        (number === 1 ? this.setState({player1: user}) : this.setState({player2: user}))
    }

    fight = () => {
        this.setState({resultFight: !this.state.resultFight});
    }

    render() {
        return (
            <View style={styles.container}>
                <Player number={1} handler={this.setPlayer}/>
                {this.state.resultFight ?
                    <ResultBattle playerOne={this.state.player1}
                                  playerTwo={this.state.player2}
                                  />
                    :
                    <ButtonBattle playerOne={this.state.player1}
                                  playerTwo={this.state.player2}
                                  handler={this.fight}/>
                }
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
