# What is React Native
## React 
- It is a JavaScript library to building user interfaces.
## React Native
- A collection of special React components which are compiled to give nativ views.
- Give acces to native platform API like camera.
- Gives tools to connect JS code to Native platform.

## React + React Native = Real native mobile apps (iOS or Android)

# How React Native Works
| React for the web | Android native component | iOS native component | React Native component |
| ----------- | ----------- | ----------- | ---------- |
| `<div>` | android.view | UIView | `<view>` |
| `<input>` | EidtText | UITextFeild | `<TextInput>` |


![Behind the Scene](./assets/reactnative-behind-the-scene.PNG)

# Expo vs React Native CLI
| Expo CLI / Tool | React Native CLI |
| ----------- | ----------- |
| Third party service(free) | By React native team |
| Managed app develoement | Bare-bone developement (only a basic setup) |
| Lots of convinience and utility features: Siplifies development | Almost no convinience or utility features |
| But you are limited to expo ecosystem | Full flexibility: Integrate with any native code |

We can switch from expo to React native CLI anytime

# React Native Basics
- There is no HTML and CSS in react native
- ScrollView is better than View
- [FlatList](https://reactnative.dev/docs/flatlist) is better than ScrollView
```
<FlatList
    data={list}
    keyExtractor={(item) => item.uid}
    renderItem={(item, index) => (
        <Text>{item.value}</Text>
    )}
 />
```
- Default display in RN is flex
- Modal - `<Modal>`

### Adding font
```
expo i expo-font 
```

```
import * as Font from 'expo-font';

const loadFonts = () => {
    return Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })
}
```

### App loader component
```
expo install expo-app-loading
```
```
import AppLoading from 'expo-app-loading';

<AppLoading startAsync={fontLoaded}
    onFinish={() => setFontLoaded(true)}
    onError={() => console.log('error')} 
/>
```
## Add navigation 

```
npm install react-navigation;
```
### Installing dependencies into an Expo managed project???
```
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

### install imp modules
```
npm i react-navigation-stack
npm i react-navigation-tabs
npm i react-navigation-drawer
```

```
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CatogoriesScreen from '../Screens/CategoriesScreen';
import CatogoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailsScreen from '../Screens/MealDetailsScreen';

const MealNavigator = createStackNavigator({
    categoryMeals: CatogoryMealsScreen,
    categories: CatogoriesScreen,
    MealDetails: MealDetailsScreen
});

export default createAppContainer(MealNavigator);
```
```
import MealNavigator from './Navigation/MealNavigator';

return (
  <MealNavigator />
)
```
### Navaigating between screen
Navigation route pass props by default if they are not written in nested structure
```
props.navigation.navigate('RouteName')
```
or
```
props.navigation.navigate({routeName: 'RouteName'})
```

### other methods
```
props.navigation.push('RouteName')
props.navigation.pop() // only used in stack navigation
props.navigation.popToTop() // only all screen
props.navigation.goBack() // for all navigations
props.navigation.replace('newroute')
```

### Configuring header with navigation header options
```
CatogoriesScreen.navigationOptions = {
    headerTitle: 'Meal Catagories',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
}
```
- navigationOptions could be object as well as function as per the requirement
- for dynamic data, its should be a function

```
CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title
    }
}
```

### Default NavigationOptions
```
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
        headerTitle: 'Meal Catagories'
    }
}
```
### For better efficiency and performance
```
npm i react-native-screen
```
```
import { enableScreens } from 'react-native-screen'; 
enableScreens();
```

### getting params
```
props.navigation.getParam('mealId');
```

## Adding Header Buttons
```
npm install --save react-navigation-header-buttons@6
```
```
npm i @expo/vector-icons
```
```
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../Comnponents/HeaderButton';

HeaderRight: (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item 
            title="favourite" 
            iconName="ios-star" 
            onPress={() => {console.log('markAsFav')}}
        />
    </HeaderButtons>
)
```
# Adding Tab Navigation
```
import { createBottomTabNavigator } from 'react-navigation-tabs';

const MealFavTabNavigator = createBottomTabNavigator({
    Meals: MealNavigator,
    Fav: FavScreen
})
```
```

const MealFavTabNavigator = createBottomTabNavigator({
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
        screen: FavScreen,
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
},{
    tabBarOptions: {
        activeTintColor: Colors.primaryColor
    }
})
```
[More About Navigation Options](https://reactnavigation.org/docs/bottom-tab-navigator/)

### Note:
When defining a navigator, you can also add navigationOptions to it:
```
const SomeNavigator = createStackNavigator({
    ScreenIdentifier: SomeScreen
}, {
    navigationOptions: {
        // You can set options here!
        // Please note: This is NOT defaultNavigationOptions!
    }
});
```
Don't mistake this for the defaultNavigationOptions which you could also set there (i.e. in the second argument you pass to createWhateverNavigator()).

### Android Specific Icons
```
npm i react-navigation-material-bottom-tabs
npm i react-native-paper
```