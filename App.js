import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {Text,View,Button,Alert} from 'react-native';


const MyApp = () => {
  const clicking = ()=> Alert.alert("", "Вы нажали на кнопку");
  return(
      <View style ={{flex: 1, justifyContent: "center", alignItems:"center"}}>
        <Text > Hello World. </Text>
        <Button title='Кнопка' onPress={clicking}/>
      </View>
  );
}

export default MyApp;

