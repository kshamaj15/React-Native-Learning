import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';

import MealItem from '../Comnponents/MealItem';

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const displayMeals = MEALS.filter(meal => meal.catIds.indexOf(catId) >= 0);

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    const openMealDetails = (mealItem) => {
        props.navigation.navigate('MealDetails', {mealId: mealItem.item.id});
    }

    const renderMealItem = (mealItem) => {
        return (
            <MealItem 
                title={mealItem.item.title}
                duration={mealItem.item.duration}
                complexity={mealItem.item.complexity}
                affordibility={mealItem.item.affordibility}
                imageUrl={mealItem.item.imageUrl}
                onSelected={() => openMealDetails(mealItem)}
            />
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList 
                data={displayMeals}
                renderItem={renderMealItem}
            />
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

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title
    }
}

export default CategoryMealsScreen;
