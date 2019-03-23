import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import {ResultPlayer} from "./ResultPlayer";
import {InfoPlayer} from "./InfoPlayer";

export class ResultBattle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score1: 0,
            score2: 0,
            winner: 0
        }
    }

    componentDidMount() {
        const {playerOne, playerTwo} = this.props;
        const score1 = playerOne.followers + playerOne.public_repos + playerOne.following;
        const score2 = playerTwo.followers + playerTwo.public_repos + playerTwo.following
        const winner = (score1 > score2 ? 1 : 2);
        this.setState({score1});
        this.setState({score2});
        this.setState({winner});
    }

    render() {
        let {playerOne, playerTwo} = this.props;
        playerOne = {...playerOne, score: this.state.score1};
        playerTwo = {...playerTwo, score: this.state.score2};
        const winner = (this.state.winner === 1 ? playerOne : playerTwo);
        const looser = (this.state.winner === 1 ? playerTwo : playerOne);
        return (
            <View style={styles.container}>
                <View style={styles.resultPlayer}>
                    <Text style={{color:"green"}}>Winner</Text>
                    <InfoPlayer user={winner} size={28}/>
                    <ResultPlayer player={winner} score={winner.score}/>
                </View>
                <View style={styles.resultPlayer}>
                    <Text style={{color:"red"}}>Looser</Text>
                    <InfoPlayer user={looser} size={20}/>
                    <ResultPlayer player={looser} score={winner.score}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    resultPlayer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
