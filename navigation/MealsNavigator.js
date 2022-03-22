import React from 'react';
import {Text} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen  from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen'
import Colors from '../constants/Colors';
import {Ionicons} from '@expo/vector-icons';
import { Platform } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

const MealsNavigator = createStackNavigator(
{
    Categories:{ 
        screen:CategoriesScreen,
        
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

const defaultStackNavOptions={
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

const FavoritesNavigator = createStackNavigator(
    {
        Favorites:FavoritesScreen,
        MealDetail:MealDetailScreen
    },
    
    {
        mode:'modal',
        defaultNavigationOptions: defaultStackNavOptions
    }
    )


const tabScreenConfig={

    Meals:{
        screen:MealsNavigator,
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarLabel:<Text style={{fontFamily:'sen-bold'}}>Meals</Text>

        }
    },
    Favorites:{
        screen:FavoritesNavigator,
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.secondaryColor,
            tabBarLabel:<Text style={{fontFamily:'sen-bold'}}>Favorites</Text>
        }
            
    
    },

}

const MealsFavTabNavigator =Platform.OS === 'android' ? 
createMaterialBottomTabNavigator(tabScreenConfig,{

    activeColor:'white',
    shifting:true,
    barStyle:{
        backgroundColor:Colors.primaryColor
    }

}) : 

createBottomTabNavigator (tabScreenConfig,
    {
    tabBarOptions:{
        activeTintColor:Colors.secondaryColor
    }
    }
)


const FiltersNavigator = createStackNavigator(
    {
    Filters:FiltersScreen
    },
    {
        mode:'modal',
        defaultNavigationOptions: defaultStackNavOptions
    }
)


const MainNavigator=createDrawerNavigator({
    MealsFavs:{
        screen:MealsFavTabNavigator,
        navigationOptions:{
            drawerLabel:'Meals',
            drawerIcon:<Ionicons color={Colors.primaryColor} name="ios-restaurant" />
        }
    },
    Filters:FiltersNavigator

},
{
    contentOptions:{
        activeTintColor:Colors.primaryColor,
        labelStyle:{
            fontFamily:'sen-bold',
        }
    }
}
)

export default createAppContainer(MainNavigator);