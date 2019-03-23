import React from 'react'
import {
    FlatList,
    StyleSheet,
} from 'react-native'
import * as api from "../../services/apis/GithubAPI";
import {InfoRepo} from "./InfoRepo";

export class ListRepo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listRepository: {},
            loading: true
        }
    }

    componentDidMount() {
        api.getRepoPopular()
            .then(response => {
                    this.setState({listRepository: response.items});
                    this.setState({loading: false})
                }
            );
    }

    _keyExtractor = (item) => item._id;

    render() {
        if (this.state.loading) {
            return null
        }
        // const listRepo = this.state.listRepository.map((repo) => {
        //     return
        // });
        return (
            <FlatList
                style={styles.list}
                data={this.state.listRepository}
                keyExtractor={this._keyExtractor}
                renderItem={({item, i}) => <InfoRepo key={i} repository={item}/>
                }
            />
        )
    }
}

const
    styles = StyleSheet.create({
        image: {
            height: 100,
            width: 100
        },
        text: {
            fontSize: 28,
            fontWeight: 'bold'
        },
        list:{
            borderBottomWidth: 1
        }
    })
