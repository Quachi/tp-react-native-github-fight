import React from 'react';
import {
    View,
} from 'react-native'
import {ListRepo} from "../components/popular-components/ListRepo";

export default class PopularScreen extends React.Component {
    static navigationOptions = {
        title: 'Popular',
    };

    constructor(props) {
        super(props);
        this.state = {
            repository: {},
            loading: false
        }
    }

    endLoading = () => {
        setTimeout(() => {
            this.setState({loading: true})
        }, 1000);
    }

    render() {
        return (
            <View style={{flex:1}}>
                <ListRepo handler={this.endLoading}/>
            </View>

        )
    }
}
