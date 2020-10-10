/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    Image,
} from 'react-native';
import PictogramHome from './assets/pics/home_icon.png';

class DrawerUserScreen extends Component {

    drawerStyle = () => {
        this.props.navigation.setOptions({
            drawerIcon: () => (
                <Image
                    style={{ width: 40, height: 40 }}
                    source={PictogramHome}
                />
            )
        })
    }

    componentDidMount = () => {
        this.drawerStyle();
    }

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>User Screen</Text>
                <Button
                    title="To Home Screen"
                    onPress={() => {
                        this.props.navigation.navigate('Home')
                    }}
                />
            </View>
        )
    }
}

export default DrawerUserScreen;
