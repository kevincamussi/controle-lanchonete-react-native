import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProductFormScreen from './screens/ProductFormScreen';
import SalesScreen from './screens/SalesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Adicionar Produto" component={ProductFormScreen} />
        <Stack.Screen name="Vender Produto" component={SalesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
