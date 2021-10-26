import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CatogoriesScreen from '../Screens/CategoriesScreen';
import CatogoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailsScreen from '../Screens/MealDetailsScreen';

const MealNavigator = createStackNavigator({
    Categories: CatogoriesScreen,
    CategoryMeals: CatogoryMealsScreen,
    MealDetails: MealDetailsScreen
});

export default createAppContainer(MealNavigator);
