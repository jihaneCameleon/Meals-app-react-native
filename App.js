import React,{useState} from 'react';
import * as Font from 'expo-font';
import CategoriesScreen from './screens/CategoriesScreen';
import AppLoading from 'expo-app-loading';
import MealsNavigator from './navigation/MealsNavigator';

const fetchFonts=()=>{
  Font.loadAsync({
     'anton':require('./assets/Fonts/Anton-Regular.ttf'),
     'sen-regular':require('./assets/Fonts/Sen-Bold.ttf'),
     'sen-bold':require('./assets/Fonts/Sen-Regular.ttf'),
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
