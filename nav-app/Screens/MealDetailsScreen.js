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
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
        headerTitle: 'Meal Catagories'

    }
});



export default MealDetailsScreen;
