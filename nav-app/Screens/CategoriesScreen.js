import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../Comnponents/CategoryGridTile';

const CatogoriesScreen = props => {

    const navigateToDetails = (itemData) => {
        props.navigation.navigate('CategoryMeals', {
            categoryId: itemData.item.id
        })
    }

    const rendorGridItems = (itemData) => {
        return (
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color}
                onSelect={() => navigateToDetails(itemData)} 
            />
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
    }
});

export default CatogoriesScreen;
