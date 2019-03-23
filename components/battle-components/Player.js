import React from 'react'
import {
    View,
    Text,
    TextInput, TouchableOpacity, StyleSheet
} from 'react-native'
import {FormPlayer} from "./FormPlayer";
import {InfoPlayer} from "./InfoPlayer";

export class Player extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            haveUser: false
        }
    }

    handler = (user) => {
        this.setState({user, haveUser: true});
        this.props.handler(this.props.number, user);
    }

    renderUser = () => {
        return (
            <View style={styles.container}>
                <InfoPlayer user={this.state.user}/>
            </View>
        )
    }

    render() {
        if (this.state.haveUser) {
            return this.renderUser()
        } else {
            return (
                <View style={styles.container}>
                    <FormPlayer number={this.props.number} handler={this.handler}/>
                </View>
            )

        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
})
