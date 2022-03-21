import React from 'react';
import {View,Text,StyleSheet,Button,FlatList} from 'react-native';
import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy-data';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = props =>{

    const catId=props.navigation.getParam('categoryId');
    const displayedMeals=MEALS.filter(meal=>meal.categoryIds.indexOf(catId)>=0);


    return(
        <MealList listData={displayedMeals} navigation={props.navigation} />
    )
}

CategoryMealsScreen.navigationOptions=navigationData=>{

    const catId=navigationData.navigation.getParam('categoryId');
    const selectedCat=CATEGORIES.find(cat=>cat.id===catId);
    return{
        headerTitle:selectedCat.title,
        headerStyle:{
            backgroundColor:Colors.primaryColor
        },
        headerTintColor:'white',
    }
}


export default CategoryMealsScreen;
