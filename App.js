import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverViewScreens from "./screens/MealsOverViewScreen";
import MealsDetails from "./screens/MealsDetails";


//creating a stack for navigation
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "Categories of Foods" component = {CategoriesScreen} options={{
            title: 'Types of foods',
            headerStyle: {backgroundColor: 'green'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: 'black'}
          }}/>
          <Stack.Screen name="Details of food" component={MealsOverViewScreens} options={{
            headerStyle: {backgroundColor: 'green'},
            headerTintColor: 'white',
          }} />
          <Stack.Screen name="Meals Details" component={MealsDetails}  options={{
            title: 'Details of food',
            headerStyle: {backgroundColor: 'black'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: 'skyblue  '},
    
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
