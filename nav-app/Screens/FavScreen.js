import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavScreen = props => {
    return (
        <View style={styles.screen}>
            <Text> FavScreen </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});

export default FavScreen;
