import { Pressable, View, Text, StyleSheet} from "react-native";

function CategoryGridTile({ title, color }) {
  return (
    <View style = {styles.container}>
      <Pressable  android_ripple={{color: '#ccc'}} style = {({pressed}) => [styles.press, pressed ? styles.buttons : null]} >
        <View style = {styles.innerContainer}>
          <Text style = {styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
     container:{
        flex: 1,
        margin: 16,
        height: 150,
        elevation: 4,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
     },
     press:{
      flex:1,
     },
     buttons:{
      opacity: 0.4,
     },
     innerContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
     },
     text:{
        fontSize: 18,
        fontWeight: 'bold'
        //padding: 10
     },
  
})

export default CategoryGridTile;
