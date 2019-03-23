import React from 'react'
import {
    View,
    Text,
    TextInput, TouchableOpacity, StyleSheet
} from 'react-native'

export class ResultPlayer extends React.Component{
    render() {
        const {player, score} = this.props;
        return(
            <View>
                <Text>Name: {player.name}</Text>
                <Text>Followers: {player.followers}</Text>
                <Text>Followings: {player.following}</Text>
                <Text>Public Repos: {player.public_repos}</Text>
                <Text>Score: {score}</Text>
            </View>
        )
    }
}
