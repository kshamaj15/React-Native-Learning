import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import CatogoriesScreen from '../Screens/CategoriesScreen';
import CatogoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailsScreen from '../Screens/MealDetailsScreen';
import FavScreen from '../Screens/FavScreen'
import Colors from '../constants/Colors';


const navOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        headerTitle: 'Meal Catagories'
    }
}

const tabScreenConfig = {
    Meals: {
        screen: MealNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons name="ios-restaurant"
                        size={25}
                        color={tabInfo.tintColor} />
                );
            }
        }
    },
    Fav: {
        screen: FavNavigator,
        tabBarLabel: 'Favourite!',
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons name="ios-star"
                        size={25}
                        color={tabInfo.tintColor} />
                );
            }
        }
    }
}

const MealNavigator = createStackNavigator({
    Categories: CatogoriesScreen,
    CategoryMeals: CatogoryMealsScreen,
    MealDetails: MealDetailsScreen
}, navOptions);

const FavNavigator = createStackNavigator({
    Favourite: FavScreen,
    MealDetails: MealDetailsScreen
}, navOptions)

const MealFavTabNavigator = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: Colors.primaryColor,
        shifting: true
    }) : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.primaryColor
        }
    })

export default createAppContainer(MealFavTabNavigator);
