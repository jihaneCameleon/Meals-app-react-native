import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet,ImageBackground} from 'react-native';
import DefaultText from './DefaultText';



const MealItem = props=>{
    return(

            <View>
                <TouchableOpacity style={styles.mealItem} onPress={props.onSelectMeal}>
                    <View style={{...styles.mealRow,...styles.mealHeader}} >
                        <ImageBackground source={{uri:props.image}} style={styles.bgImage}  >
                        <Text style={styles.title} numberOfLines={1}>
                            {props.title}
                        </Text>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow,...styles.mealDetail}}>
                        <DefaultText>{props.duration}</DefaultText>
                        <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                    </View>
                </TouchableOpacity>
            </View>
    )
}

const styles=StyleSheet.create({

    mealItem:{
        height:200,
        width:'100%',
        backgroundColor:'#f5f5c1',
        borderRadius:5,
        overflow:'hidden'
    },
    mealRow:{
        flexDirection:'row'
    },
    mealHeader:{
        height:'85%', 
    },
    mealDetail:{
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center',
        height:'15%'
    },
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end',
    },
    title:{
        fontFamily:'sen-bold',
        fontSize:20,
        color:'white',
        backgroundColor:'rgba(0,0,0,0.5)',
        paddingVertical:5,
        paddingHorizontal:12,
        textAlign:'center',

    }


})

export default MealItem;