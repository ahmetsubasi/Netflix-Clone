import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Anasayfa from "./src/Anasayfa";
import Series from "./src/Series";
import List from "./src/List";
import Film from "./src/Film";


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Anasayfa">
      <Stack.Screen name="Anasayfa" component={Anasayfa}
       options={{
        title: 'Clone Netflix',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
          />
      <Stack.Screen name="Series" component={Series}
       options={{
      title: 'Diziler',
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }} />
      <Stack.Screen name="Film" component={Film}
      options={{
        title: 'Film',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
      <Stack.Screen name="List" component={List}
      options={{
        title: 'Listem',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


