import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen  from '../screens/MealDetailScreen';
import FiltersScreen from '../screens/FavoritesScreen';
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

export default createAppContainer(MealsNavigator);