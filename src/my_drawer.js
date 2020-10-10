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
    StyleSheet,
    Image,
    ScrollView,
} from 'react-native';
import Logo from './assets/pics/home_icon.png';
import { CommonActions } from '@react-navigation/native';

class SideDrawer extends Component {

    navigateToScreen = (route) => () => {
        this.props.navigation.dispatch(
            CommonActions.navigate({
                name: route,
                params: {},
            })
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image
                                style={{ width: 40, height: 40 }}
                                source={Logo}
                            />
                        </View>
                    </View>
                    <Text style={styles.sectionHeading}>Section 1</Text>
                    <View style={styles.navSectionStyle}>
                        <Text
                            style={styles.navItemStyle}
                            onPress={this.navigateToScreen('Home')}
                        >
                            Home
                        </Text>
                        <Text
                            style={styles.navItemStyle}
                            onPress={this.navigateToScreen('User')}
                        >
                            User
                        </Text>
                        <Text
                            style={styles.navItemStyle}
                            onPress={() => alert("Help window")}
                        >
                            Help
                        </Text>
                        <Text
                            style={styles.navItemStyle}
                            onPress={() => alert("Info window")}
                        >
                            Info
                        </Text>
                    </View>
                </ScrollView>
                <View style={{ paddingLeft: 10, paddingBottom: 30 }}>
                    <Text>Copyright @ Inpyeong, 2020.</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
    },
    imageContainer: {
        alignItems: 'center',
        padding: 50,
    },
    sectionHeading: {
        color: '#FFF',
        backgroundColor: '#EF9DE4',
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontWeight: 'bold',
    },
    navSectionStyle: {
        backgroundColor: '#04B6FF',
    },
    navItemStyle: {
        padding: 10,
        color: "#FFF",
    }
});

export default SideDrawer;
