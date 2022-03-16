import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen  from '../screens/MealDetailScreen';
import FiltersScreen from '../screens/FavoritesScreen';

const MealsNavigator = createStackNavigator({
    Categories:CategoriesScreen,
    CategoryMeals: {
        screen:CategoryMealsScreen,
    },
    MealDetail:MealDetailScreen
})

export default createAppContainer(MealsNavigator);