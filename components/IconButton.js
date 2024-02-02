import { Pressable, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons'
 function IconButton({icon, color, pressed}){
    return(
        <Pressable onPress={pressed}
         style = {({pressed}) => pressed && styles.icons} >
            <Ionicons name= {icon} size={24} color={ color}/>
        </Pressable>
    )
 }

 const styles = StyleSheet.create({

     icons:{
        opacity: 0.7,
     }
 })

export default IconButton;