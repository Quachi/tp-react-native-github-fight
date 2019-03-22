import React from 'react'
import {
    View,
    Text,
    TextInput, TouchableOpacity, StyleSheet
} from 'react-native'

export class ButtonBattle extends React.Component{
    constructor(props){
        super(props);
    }

    fight = () => {
        this.props.handler();
    }
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={this.fight}>
                    <Text style={styles.text}>Battle</Text>
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
        padding: 20,
    },
    button: {
        backgroundColor: '#000000',
        padding: 10,
        marginTop: 30,
        minWidth: 220,
    },
    text:{
        textAlign: 'center',
        fontSize:18,
        color:"#FFFFFF",
        fontWeight: 'bold'
    }
})
