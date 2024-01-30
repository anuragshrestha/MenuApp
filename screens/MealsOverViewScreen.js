
import { Text, View, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";


 function MealsOverViewScreens({route}){

    const catId = route.params.categoryId;


    return(
        <Text>Meals OverView screen! {catId}</Text>
    )
 }


 const style = StyleSheet.create({
    conatiner:{
        flex: 1,
    }
 })
   
 export default MealsOverViewScreens;