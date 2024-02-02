import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
  return data.map((dataPoint) => (
    <View  style = {styles.innerView} key={dataPoint}>
      <Text style = {styles.color}>{dataPoint}</Text>
    </View>
  ));
}


const styles = StyleSheet.create({
    innerView:{
        borderRadius: 8,
        borderColor: 'maroon',
        backgroundColor: 'maroon',
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 6,
        marginHorizontal: 12,
      },
      color:{
        color: 'white',
        textAlign: 'center',

      }
})

export default List;