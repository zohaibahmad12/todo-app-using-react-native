import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';



const TodoItem = () => {

    return (
        <View style={styles.todoItemContainer}>

            <View style={styles.todoItemLeftContainer}>
                <Button
                    title="Done"
                />
                <Text>Todo Item</Text>
            </View>

            <View style={styles.todoItemRightContainer}>
                <Icon name="trash" size={30} color="red" />
                <Icon name="edit" size={30} color="red" />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({


    todoItemContainer: {

        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "black",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    todoItemLeftContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems:"center"
    },
    todoItemRightContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems:"center"
    }


})

export default TodoItem;