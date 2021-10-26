import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CatogoriesScreen = props => {

    const rendorGridItems = (itemData) => {
        return (
            <View>
                <Text>{itemData.item.title}</Text> 
            </View>
        )
    }

    return (
        <FlatList 
           numColumns="3"
           data={CATEGORIES}
           renderItem={rendorGridItems}
        />
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
