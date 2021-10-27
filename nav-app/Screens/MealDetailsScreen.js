import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Colors from '../constants/Colors';

const MealDetailsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text> MealDetailsScreen </Text>
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



export default MealDetailsScreen;
