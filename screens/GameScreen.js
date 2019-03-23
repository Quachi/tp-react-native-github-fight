import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import {Player} from "../components/battle-components/Player";
import {ButtonBattle} from "../components/battle-components/ButtonBattle";
import {ResultBattle} from "../components/battle-components/ResultBattle";
import {Loader} from "../components/Loader";

export default class GameScreen extends React.Component {
    static navigationOptions = {
        title: 'Game',
    };

    constructor(props) {
        super(props);
        this.state = {
            player1: null,
            player2: null,
            resultFight: false,
            loading: false
        }
    }

    setPlayer = (number, user) => {
        (number === 1 ? this.setState({player1: user}) : this.setState({player2: user}))
    }

    fight = () => {
        this.setState({
            resultFight: !this.state.resultFight,
            loading:true
        });
        setTimeout(()=> {
            this.setState({
                loading:false
            });
        },3000)
    }

    render() {
        if(this.state.loading){
            return <Loader/>
        }
        return (
            <View style={styles.container}>
                <Player number={1} handler={this.setPlayer}/>
                {this.state.resultFight ?
                    <ResultBattle playerOne={this.state.player1}
                                  playerTwo={this.state.player2}
                    />
                    :
                    (this.state.player1 !== null && this.state.player2 !== null) &&
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
