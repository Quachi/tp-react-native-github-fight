import React from 'react';
import {
    ScrollView,
    Text
} from 'react-native'
import * as api from '../services/apis/GithubAPI'
import {InfoRepo} from "../components/popular-components/InfoRepo";
import {ListRepo} from "../components/popular-components/ListRepo";

export default class PopularScreen extends React.Component {
    static navigationOptions = {
        title: 'Popular',
    };

    constructor(props) {
        super(props);
        this.state = {
            repository: {},
            loading:false
        }
    }

    componentDidMount() {
        api.getRepoPopular()
            .then(response => {
                    // console.log("response", response['items'][0]);
                    this.setState({repository: response['items'][0]})
                }
            );
    }

    render() {
        return (
            <ScrollView style={{padding:20}}>
                <ListRepo/>
            </ScrollView>
        )
    }
}
