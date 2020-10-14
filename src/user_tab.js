/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';

class TabUserHome extends Component {

    render() {
        console.warn(this.props.route);
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text>User Screen</Text>
            </View>
        );
    }
}

export default TabUserHome;
