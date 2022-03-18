import React,{useState} from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MealsNavigator from './navigation/MealsNavigator';
import {enableScreens} from 'react-native-screens';

enableScreens();

const fetchFonts=()=>{
  Font.loadAsync({
     'anton':require('./assets/Fonts/Anton-Regular.ttf'),
     'sen-regular':require('./assets/Fonts/Sen-Regular.ttf'),
     'sen-bold':require('./assets/Fonts/Sen-Bold.ttf'),
  })
}

export default function App() {

  const[fontLoaded,setFontLoaded]=useState(false);
  
  if(!fontLoaded){

    return(
        <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setFontLoaded(true)}
            onError={(err) => console.log(err)}
        />
    );
  }
  
  return (
      
    <MealsNavigator/>

      
  );
}
