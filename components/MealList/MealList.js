import { View, Text, FlatList } from "react-native";
import MealItem from "../MealItem";

function MealList({ item }) {
  function renderMealItem(itemData) {
   
    const item = itemData.item;

    const itemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...itemProps} />;
  }

   

  return (
    <FlatList
      data={item}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem}
    />
  );
}

export default MealList;
