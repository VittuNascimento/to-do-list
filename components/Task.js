import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Task = (propsTask) => {
    const [isChecked, setIsChecked] = React.useState(false);

    const handlePress = () => {
        setIsChecked(!isChecked);
    };

    return (
        <View style={styles.item}>
            <View style={styles.itemEsquerda}>
                <TouchableOpacity style={styles.caixa} onPress={handlePress}>
                    {isChecked && <Feather name="check-square" size={24} color="black" />}
                </TouchableOpacity>
                <Text style={styles.itemText}>{propsTask.text}</Text>
            </View>
            <View style={styles.circulo}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemEsquerda: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    caixa: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText: {
        maxWidth: '80%',
    },
    circulo: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default Task;
