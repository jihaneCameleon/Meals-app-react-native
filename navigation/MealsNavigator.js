import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen  from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../constants/Colors'

const MealsNavigator = createStackNavigator(
{
    Categories:{ 
        screen:CategoriesScreen,
        navigationOptions:{
            headerTitle:'Meal Catgories',
            
        }
    },
    CategoryMeals: {
        screen:CategoryMealsScreen,
       
    },
    MealDetail:MealDetailScreen
},

{
    mode:'modal',
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Colors.primaryColor,
            justifyContent:'center'
        },
        headerTitleStyle: {
            fontFamily: "anton"
        
        },
        headerTitleAlign: 'center',
        headerTintColor:'white',
    }
}
)

const MealsFavTabNavigator = createBottomTabNavigator({

})

export default createAppContainer(MealsNavigator);