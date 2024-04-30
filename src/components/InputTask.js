import React, { useState } from "react";
import { View, StyleSheet, TextInput} from "react-native";
import Adicionar from "./Adicionar";


const InputTask = () => {

    const [inputValue, setInputValue] = useState('');  
  return (
    <View style = {styles.container}> 
      <TextInput style = {styles.input}
      placeholder = 'Digite uma nova tarefa...'
      value = {inputValue}
      onChangeText = {setInputValue}
      />
      <Adicionar text = 'Nova Tarefa'/>
    </View>
  );
};

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10
    }
})

export default InputTask;