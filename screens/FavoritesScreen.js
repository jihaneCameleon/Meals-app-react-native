import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';



const FavoritesScreen = props =>{

        const displayedMeals=MEALS.filter(meal=>meal.id === 'm1' || meal.id==='m2');


    return(
        <MealList listData={displayedMeals} navigation={props.navigation}/>
        
    )

}

FavoritesScreen.navigationOptions=navData=>{
    return{
    headerTitle:'Your Favorites',
    headerLeft:(
        <HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item title="Menu" iconName="ios-menu" onPress={()=>{
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>)
    }
}




export default FavoritesScreen;

    
