import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsOverViewScreens from "./screens/MealsOverViewScreen";
import MealsDetails from "./screens/MealsDetails";
import FavoriteScreen from "./screens/FavoriteScreen";
import IconButton from "./components/IconButton";
import FavoritesContextProvider from "./store/context/favorite-context";
import { store } from "./store/redux/store";
import { Provider } from "react-redux";


//creating a stack for navigation
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        drawerContentStyle: { backgroundColor: "purple" },
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "white",
        drawerActiveBackgroundColor: "black",
      }}
    >
      <Drawer.Screen
        name="Categories of Meal"
        component={CategoriesScreen}
        options={{
          headerStyle: { backgroundColor: "green" },
          sceneContainerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          drawerIcon: ({ color }) => <IconButton icon="list" color={color} />,
        }}
      />
      <Drawer.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color }) => <IconButton icon="star" color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTintColor: "white",
              headerTitleAlign: "center",
            }}
          >
            <Stack.Screen
              name="Categories"
              component={DrawerNavigator}
              options={{
                headerShown: false,
                headerStyle: { backgroundColor: "green" },
                contentStyle: { backgroundColor: "black" },
              }}
            />
            <Stack.Screen
              name="Details of food"
              component={MealsOverViewScreens}
              options={{
                headerStyle: { backgroundColor: "green" },
              }}
            />
            <Stack.Screen
              name="Meals Details"
              component={MealsDetails}
              options={{
                title: "About the Meal",
                headerStyle: { backgroundColor: "black" },
                contentStyle: { backgroundColor: "skyblue  " },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
