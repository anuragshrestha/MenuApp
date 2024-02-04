import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

function CategoriesScreen({navigation}) {

  function renderCategoryItem(itemData) {

    function pressHandler(){
        navigation.navigate('Details of food', {
          categoryId: itemData.item.id,
        });
    }


    return (
      <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress = {pressHandler}/>
    );
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon="home"  color='blue' />
      }
    })
  })

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
