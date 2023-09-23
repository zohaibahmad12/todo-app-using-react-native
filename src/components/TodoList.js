import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import icons library
import { useSharedContext } from '../context/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';


const TodoList = () => {

  const { todoList, deleteItemFromList, rewriteItem, updateCompletionStatus, setTodoList } = useSharedContext();


  useEffect(() => {

    const fetchData = async () => {
      try {

        const stringData = await AsyncStorage.getItem('todoList');
        if (stringData != null) {
          setTodoList(JSON.parse(stringData))
        }

      } catch (error) {

      }
    };

    fetchData();


  }, []);


  useEffect(() => {
    const storeData = async () => {
      try {
        const stringTodoList = JSON.stringify(todoList)
        await AsyncStorage.setItem('todoList', stringTodoList);

      } catch (error) {

      }
    };

    storeData();

  }, [todoList]);






  return (
    <View style={styles.listContainer}>
      <FlatList

        data={todoList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            {
              (item.isDone) ?
                <TouchableOpacity style={styles.checkbox} onPress={() => updateCompletionStatus(item.id)} >
                  <FontAwesome name="check" size={18} color="green" />
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.checkbox} onPress={() => updateCompletionStatus(item.id)}>
                  <FontAwesome name="times" size={18} color="#FF6B6B" />
                </TouchableOpacity>
            }

            <Text style={styles.itemText}>{item.name}</Text>

            <TouchableOpacity style={styles.editIcon} onPress={() => rewriteItem(item.id, item.name)}>
              <FontAwesome name="pencil" size={21} color="grey" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.deleteIcon} onPress={() => deleteItemFromList(item.id)}>
              <FontAwesome name="trash" size={22} color="grey" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};




const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 7,
    marginVertical: 10
  },
  checkbox: {
    marginRight: 10,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    color: '#333', // Dark text color
  },
  editIcon: {
    marginRight: 20,


  },

});

export default TodoList;
