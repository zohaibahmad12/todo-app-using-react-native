import React from "react";
import { Text, View, StyleSheet } from "react-native"
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoContainer = () => {

    return (
        <View style={styles.todoContainer}>
            <TodoForm></TodoForm>
            <TodoItem></TodoItem>
        </View>
    )
}

const styles = StyleSheet.create({

    todoContainer: {
       
        width:"80%",
        paddingVertical:15,
        borderRadius:10,
        backgroundColor:"lightblue",
    },

   

})

export default TodoContainer;