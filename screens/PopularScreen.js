import React from 'react';
import {
    View,
    Text
} from 'react-native'

export default class PopularScreen extends React.Component {
    static navigationOptions = {
        title: 'Popular',
    };

    render() {
        return (
            <View>
                <Text>Popular screen</Text>
            </View>
        )
    }
}
