import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CatogoriesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text> CatogoriesScreen </Text>
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

export default CatogoriesScreen;
