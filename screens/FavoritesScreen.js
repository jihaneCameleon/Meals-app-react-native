import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const FavoritesScreen = props =>{

        const displayedMeals=MEALS.filter(meal=>meal.id === 'm1' || meal.id==='m2');


    return(
        <MealList listData={displayedMeals} navigation={props.navigation}/>
        
    )

}

FavoritesScreen.navigationOptions={
    headerTitle:'Your Favorites'
}




export default FavoritesScreen;

    
