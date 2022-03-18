import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Platform,TouchableNativeFeedback} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';



const CategoryGridTile = props=>{

    let TouchbleCmp= TouchableOpacity;
    if(Platform.OS==='android' && Platform.Version >= 21){
        TouchbleCmp=TouchableNativeFeedback
    }


    return(
        <View style={styles.gridItem} >
            <TouchbleCmp onPress={props.onPress}>
                <View style={{...styles.container,...{backgroundColor:props.color}}} >
                    <Text style={styles.title}>
                        {props.title}
                    </Text>
                </View>
            </TouchbleCmp>
        </View>
    )
}

const styles=StyleSheet.create({

    gridItem:{
        flex:1,
        margin:15,
        height:150,
        borderRadius:10,
        overflow:Platform.OS=== 'android' && Platform.Version>=2 ? 'hidden' :'visible',
        elevation:5,
    },
    container:{
        flex:1,
        borderRadius:10,
        elevation:3,
        padding:10,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    title:{
        fontFamily:'sen-bold',
        fontSize:22,
    }

})

export default CategoryGridTile;