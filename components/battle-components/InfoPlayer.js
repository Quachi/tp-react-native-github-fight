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
        const {user, size} = this.props;
        return (
            <View>
                <Image style={styles.image} source={{uri:user.avatar_url}}/>
                <Text style={[styles.text, {fontSize: size}]}>{user.name}</Text>
                <Text style={[styles.text, {fontSize: size}]}>@{user.login}</Text>
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
        fontWeight: 'bold',
    },
})
