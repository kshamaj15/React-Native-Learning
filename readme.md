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
### Installing dependencies into an Expo managed project​
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
```
