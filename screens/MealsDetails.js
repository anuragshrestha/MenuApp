import { View, Text, Image, StyleSheet, ScrollView,Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import List from "./List";
import IconButton from "../components/IconButton";

function MealsDetails({ route, navigation }) {
  const id = route.params.mealId;

   function headerButton(){
    console.log('pressed');
   }

   useLayoutEffect(() =>{
    navigation.setOptions({
      headerRight: () => {
        return  <IconButton  icon='star' color='white'  pressed={headerButton}/>
      }
    })
   })

  const displayedMeal = MEALS.find((meal) => meal.id == id);

  return (
    <ScrollView style={styles.outerConatiner}>
      <View style={styles.innerContainer}>
        <View style={styles.container}>
          <Image
            source={{ uri: displayedMeal.imageUrl }}
            style={styles.image}
          />
          <Text style={styles.text}>{displayedMeal.title}</Text>
        </View>
      </View>

     <View style = {styles.content}>
     <View style={styles.width}>
        <View style={styles.border}>
          <Text style={styles.ingredients}>Ingredients Needed</Text>
        </View>
        <List data={displayedMeal.ingredients} />
        <View style={styles.border}>
          <Text style={styles.ingredients}>Steps to Cook</Text>
        </View>
        <List data={displayedMeal.steps} />
      </View>
     </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  outerConatiner: {
    flex: 1,
    margin: 15,
    //  borderRadius: 12,
  },
  innerContainer: {
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "green",
    backgroundColor: "green",
  },
  container: {
    height: 230,
    margin: 15,
  },
  image: {
    width: "100",
    height: 200,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 15,
    color: "white",
  },
  text1: {
    flexDirection: "row",
    margin: 10,
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  innerText: {
    marginHorizontal: 5,
    color: "green",
    fontWeight: "bold",
    fontSize: 15,
  },
  ingredients: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "purple",
    marginVertical: 10,
  },
  innerIngredients: {
    textAlign: "center",
  },
  border: {
    borderBottomWidth: 3,
    borderBlockColor: "black",
    alignItems: "center",
    paddingTop: 15,
  },
  width: {
    maxWidth: "80%",
  },
  content:{
    alignItems: 'center'
  }
});

export default MealsDetails;
