import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../Comnponents/HeaderButton';
import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = props => {

    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
        </View>
    );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        HeaderRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title="favourite" 
                    iconName="ios-star" 
                    onPress={() => {console.log('markAsFav')}}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});

export default MealDetailsScreen;

// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// import { MEALS } from '../data/dummy-data';
// import HeaderButton from '../components/HeaderButton';

// const MealDetailScreen = props => {
//   const mealId = props.navigation.getParam('mealId');

//   const selectedMeal = MEALS.find(meal => meal.id === mealId);

//   return (
//     <View style={styles.screen}>
//       <Text>{selectedMeal.title}</Text>
//       <Button
//         title="Go Back to Categories"
//         onPress={() => {
//           props.navigation.popToTop();
//         }}
//       />
//     </View>
//   );
// };

// MealDetailScreen.navigationOptions = navigationData => {
//   const mealId = navigationData.navigation.getParam('mealId');
//   const selectedMeal = MEALS.find(meal => meal.id === mealId);
//   return {
//     headerTitle: selectedMeal.title,
//     headerRight: (
//       <HeaderButtons HeaderButtonComponent={HeaderButton}>
//         <Item
//           title="Favorite"
//           iconName="ios-star"
//           onPress={() => {
//             console.log('Mark as favorite!');
//           }}
//         />
//       </HeaderButtons>
//     )
//   };
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

// export default MealDetailScreen;
