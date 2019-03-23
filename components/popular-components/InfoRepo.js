import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import {Icon} from 'expo';
import Colors from "../../constants/Colors";

export class InfoRepo extends React.Component {
    render() {
        const {repository} = this.props;
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: repository.owner.avatar_url}}/>
                <View style={styles.info}>
                    <Text style={styles.text}>{repository.name}</Text>
                    <Text style={styles.text}>@{repository.owner.login}</Text>
                </View>
                <Text style={styles.popularityCount}>{repository.stargazers_count}
                    <Icon.Ionicons
                        name="ios-star"
                        size={30}
                        color='#fecc00'
                        style={styles.icon}
                    />
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 5,
        padding: 5,
        borderBottomWidth: 1,
        borderColor:"#8e8e8e"
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 30
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    popularityCount:{
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: "center"
    },
    info:{
        flex:2
    },
    icon:{
    }
})
