import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, Touchable, TouchableOpacity, Platform } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

const CatogoriesScreen = props => {

    const navigateToDetails = (itemData) => {
        props.navigation.navigate('CategoryMeals', {
            categoryId: itemData.item.id
        })
    }

    const rendorGridItems = (itemData) => {
        return (
            <TouchableOpacity onPress={() => navigateToDetails(itemData)} style={styles.gridItem}>
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            numColumns="2"
            data={CATEGORIES}
            renderItem={rendorGridItems}
        />
    );
};

CatogoriesScreen.navigationOptions = {
    headerTitle: 'Meal Catagories'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CatogoriesScreen;
