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
                <Text style={styles.text}>Score: 150</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image:{
        height:150,
        width:150

    },
    text:{
        fontSize:28,
        fontWeight: 'bold'
    },
})
