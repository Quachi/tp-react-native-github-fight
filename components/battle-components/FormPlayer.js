import React from 'react'
import {
    View,
    Text,
    TextInput, TouchableOpacity, StyleSheet
} from 'react-native'
import * as api from '../../services/apis/GithubAPI';

export class FormPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            user: {},
            showError: false
        }
    }

    submitPlayer = (name) => {
        api.getPlayer(name)
            .then(user => {
                if (user === 'Not_find') {
                    this.setState({showError: true});
                    setTimeout(() => {
                        this.setState({showError: false});
                    }, 3000)
                } else {
                    this.setState({user});
                    this.props.handler(user);
                }
            })
    }


    render() {
        return (
            <View>
                <Text style={styles.text}>
                    Player {this.props.number}
                </Text>
                <TextInput
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.text}
                    placeholder="Enter your github name"
                    style={styles.input}
                >
                </TextInput>
                <TouchableOpacity onPress={() => this.submitPlayer(this.state.name)} style={styles.btnSubmit}>
                    <Text style={styles.textBtnSubmit}>Submit</Text>
                </TouchableOpacity>
                {this.state.showError &&
                <Text style={styles.error}>Utilisateur inconnue</Text>
                }

                {/*<InfoPlayer login={this.state.user.login} name={this.state.user.name}/>*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    input: {
        borderWidth: 1,
        paddingLeft: 5,
        paddingRight: 20,
        paddingVertical: 10,
        fontSize: 18,
        marginVertical: 10,
        minWidth: 220,
    },
    btnSubmit: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginTop: 10,
    },
    textBtnSubmit: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    error: {
        color: 'red',
        marginVertical: 5
    }
})
