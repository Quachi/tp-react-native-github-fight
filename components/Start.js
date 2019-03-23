import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { DangerZone } from 'expo';
const { Lottie } = DangerZone;

export class Start extends React.Component {
    state = {
        animation: null,
    };

    componentWillMount() {
        this._playAnimation();
    }

    render() {
        return (
            <View style={styles.animationContainer}>
                {this.state.animation &&
                <Lottie
                    ref={animation => {
                        this.animation = animation;
                    }}
                    style={{
                        width: 200,
                        height: 200,
                        // alignItems: 'center',
                        // justifyContent: 'center',
                    }}
                    source={this.state.animation}
                />}
            </View>
        );
    }

    _playAnimation = () => {
        if (!this.state.animation) {
            this._loadAnimationAsync();
        } else {
            this.animation.reset();
            this.animation.play();
        }
    };

    _loadAnimationAsync = async () => {
        let result = require("../assets/animation/react.json");
        this.setState({ animation: result }, this._playAnimation);
    };
}

const styles = StyleSheet.create({
    animationContainer: {
        // flex: 1,
    },
});
