import React,{useEffect} from 'react';
import { View, StyleSheet} from 'react-native';
import Header from './src/components/Header';
import TodoInput from './src/components/TodoInput';
import TodoList from './src/components/TodoList';


import { ContextProvider } from './src/context/Context';

const App = () => {


  return (
    <ContextProvider>

        <View style={styles.container}>
          <Header title="Todo App" />
          <View style={styles.todoContainer}>
            <TodoInput />
            <TodoList />
          </View>
        </View>    

    </ContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fcfcfc',
    
  },
  todoContainer: {
    flex:1,
    backgroundColor: '#ffffff', 
    margin: 10,
    padding: 20,
    
  },
});

export default App;
