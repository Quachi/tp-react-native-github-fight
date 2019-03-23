import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native'

export class InfoPlayer extends React.Component {
    render() {
        return (
            <View>
                <Image style={styles.image} source={{uri:this.props.user.avatar_url}}/>
                <Text style={styles.text}>{this.props.user.name}</Text>
                <Text style={styles.text}>@{this.props.user.login}</Text>
            </View>
        )
    }xz
}

const styles = StyleSheet.create({
    image:{
        height:100,
        width:100
    },
    text:{
        fontSize:28,
        fontWeight: 'bold'
    },
})
