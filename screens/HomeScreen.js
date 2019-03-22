import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render(){
    return(
        <View>
          <Text>Home screen</Text>
        </View>
    )
  }

}

const styles = StyleSheet.create({

});
