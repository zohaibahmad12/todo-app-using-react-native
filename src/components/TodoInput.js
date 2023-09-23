import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useSharedContext } from '../context/Context';


const TodoInput = () => {


    const { userInput, setUserInput, addItemToList, editedId,updateItemInList } = useSharedContext();




    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Enter a todo item"
                placeholderTextColor="#666"
                value={userInput}
                onChangeText={(text) => { setUserInput(text) }}
            />
            {
                (editedId == null) ?
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={addItemToList}
                    >
                        <Text style={styles.addButtonText}>Add</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={updateItemInList}
                    >
                        <Text style={styles.addButtonText}>Update</Text>
                    </TouchableOpacity>

            }
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
       paddingVertical:10
        
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'grey', 
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
        color: '#333', 
    },
    addButton: {
        backgroundColor: '#5687ff', // Vibrant Red button background color
        paddingVertical: 13,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    addButtonText: {
        color: 'white', // White text
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default TodoInput;
