import React from "react";
import { View, Text, TouchableOpacity, StyleSheet} from "react-native";

import InputTask from "../components/InputTask";


 function NovaTask (){
  return (
    <View>
      <Text style = {styles.tituloSecao}>NovaTask</Text>
      <InputTask/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#dfdfdf"
    
  },  

  tituloSecao: {
    fontSize: 24,
    fontWeight: "bold",
  },

});
export default NovaTask;