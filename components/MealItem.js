import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from "react-native";
import Meal from "../models/meal";
import { useNavigation } from "@react-navigation/native";


function MealItem({ title, imageUrl, duration, complexity, affordability, id }) {

  const navigation = useNavigation();
   
  function renderMealItem(){
    navigation.navigate("Meals Details", {
      mealId: id,
    })
  }
   

  return (  
    <View style={styles.outerContainer}>
      <Pressable
        android_ripple={{ color: "skyblue" }}
        style={({ pressed }) =>  pressed ? styles.buttons : null}
        onPress={renderMealItem}
      >
        <View style={styles.middleConatiner}>
          <View style={styles.innerContainer}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.text}>{title}</Text>
          </View>
          <View style={styles.text1}>
            <Text style={styles.innerText}>{duration} m </Text>
            <Text style={styles.innerText}>{complexity.toUpperCase()}</Text>
            <Text style={styles.innerText}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    borderRadius: 12,
    borderColor: "black",
    backgroundColor: "skyblue",
    margin: 15,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: Platform.OS == "android" ? "hidden" : "visible",
  },
  middleConatiner: {
    borderRadius: 12,
  },
  buttons: {
    opacity: 0.4,
  },
  innerContainer: {
    flex: 1,
    height: 200,
    margin: 15,
  },
  image: {
    height: 200,
    width: "100%",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 10,
    color: "red",
  },
  text1: {
    flexDirection: "row",
    margin: 10,
    paddingTop: 15,
    justifyContent: "center",
  },
  innerText: {
    marginHorizontal: 5,
    color: "green",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default MealItem;
