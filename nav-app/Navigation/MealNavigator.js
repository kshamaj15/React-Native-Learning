import { createStackNavigator, CreateAppContainer } from 'react-navigation-stack';

import CatogoriesScreen from '../Screens/CategoriesScreen';
import CatogoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailsScreen from '../Screens/MealDetailsScreen';

const MealNavigator = createStackNavigator({
    categoryMeals: CatogoryMealsScreen,
    categories: CatogoriesScreen,
    MealDetails: MealDetailsScreen
});

export default CreateAppContainer(MealNavigator);
