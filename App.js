import React from 'react';
import { StyleSheet, Text, View } from "react-native";

import Task from "./components/Task"; //chamei o component

export default function App() {
  return (
    <View style={styles.container}>  
      <View style={styles.taskbox}>
        <Text style={styles.tituloSecao}> Atividade Diária</Text> 

        <View style={styles.items}>
          <Task text={"Passear com cachorro"} /> 
          <Task text={"Estudar programação"} />
          <Task text={"Correr na praia"} />
          <Task text={"Ler livro :codigo limpo"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfdfdf",
  },

  tituloSecao: {
    fontSize: 24,
    fontWeight: "bold",
  },
  taskbox: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  items: {
    marginTop: 30,
  },
});
