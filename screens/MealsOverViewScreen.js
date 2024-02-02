import { Text, View, StyleSheet, FlatList } from "react-native";
import { MEALS ,CATEGORIES} from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

function MealsOverViewScreens({ route, navigation}) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
      const categoriesTitle = CATEGORIES.find((category) => category.id == catId).title;

      navigation.setOptions({
        title: categoriesTitle,
      });
  }, [catId, navigation]);
   

  function renderMealItem(itemData) {

  

    const item = itemData.item;

    const itemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    }
    return <MealItem {...itemProps} />
  }

  return (
    <FlatList
      data={displayedMeals}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem}
    />
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
});

export default MealsOverViewScreens;
