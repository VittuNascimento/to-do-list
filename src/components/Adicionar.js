import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { useNavigation } from '@react-navigation/native';

const Adicionar = ({ text }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('NovaTask');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Feather name="plus" size={25} color="white" />
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#08547b',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Adicionar;
