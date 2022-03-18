import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import { MEALS } from '../data/dummy-data'; 
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import { HeaderButton } from '../components/HeaderButton';


const MealDetailScreen = props =>{


    return(
        <View style={styles.screen}>
            <Text>The meal Detail Screen</Text>
            <Button title="Go to categories" onPress={()=>{props.navigation.popToTop()}} />
   
        </View>
    )
}

MealDetailScreen.navigationOptions=navigationData =>{

    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal=MEALS.find(meal=>meal.id === mealId);

    return{
        headerTitle:selectedMeal.title,
        headerRight:<HeaderButtons HeaderButtonComponent={HeaderButton} >
                        <Item title='Favorite' iconName='ios-star' onPress={()=>{
                            console.log('mark')
                        }} />
                    </HeaderButtons>,

    }
}
const styles=StyleSheet.create({

    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }

})


export default MealDetailScreen;
