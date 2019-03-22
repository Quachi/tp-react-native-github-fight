import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import {ResultPlayer} from "./ResultPlayer";

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
        this.setState({score1:playerOne.followers + playerOne.public_repos + playerOne.following});
        this.setState({score2:playerTwo.followers + playerTwo.public_repos + playerTwo.following});
        const winner = (this.state.score1 > this.state.score2 ? 1 : 2)
        this.setState({winner});
    }

    render() {
        const {playerOne, playerTwo} = this.props;
        return (
            <View style={styles.container}>
                <ResultPlayer player={playerOne} score={this.state.score1}/>
                <Text>{this.state.winner}</Text>
                <ResultPlayer player={playerTwo} score={this.state.score2}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
})
