import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { FavoritesContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList/MealList";
import { useSelector } from "react-redux";
import { State } from "react-native-gesture-handler";

function FavoriteScreen() {
  const favoriteMealIds = useSelector((state) => state.favoriteMeal.ids);
  const favoritemeal = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoritemeal.length == 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {" "}
          You don't have any Favorite Meals for now.
        </Text>
      </View>
    );
  }

  return <MealList item={favoritemeal} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "red",
  },
});

export default FavoriteScreen;
