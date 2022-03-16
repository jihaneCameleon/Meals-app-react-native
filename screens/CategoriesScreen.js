import React from 'react';
import {View,Text,FlatList,StyleSheet,Button,TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import {CATEGORIES} from '../data/dummy-data'




const CategoriesScreen = props =>{

    const renderGridItem=(itemData)=>{
        return <TouchableOpacity onPress={()=>{ props.navigation.navigate('CategoryMeals') }}>
                    <View style={styles.gridItem}>
                        <Text>
                            {itemData.item.title}
                        </Text>
                    </View>
                </TouchableOpacity>
    }

    return(
       <View>
           <FlatList keyExtractor={(item,index)=>item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />

       </View>


    )
}

CategoriesScreen.navigationOptions={
    headerTitle:'Meal Catgories',
    headerStyle:{
        backgroundColor:Colors.primaryColor,
    },
    headerTintColor:'white',
}

const styles=StyleSheet.create({

    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    gridItem:{
        flex:1,
        margin:15,
        height:150,
    }

})


export default CategoriesScreen;
