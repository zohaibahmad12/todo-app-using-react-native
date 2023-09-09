import React from 'react';
import { View,StyleSheet } from 'react-native';
import Header from './src/components/Header';
import TodoContainer from './src/components/TodoContainer';
const App = () => {


  return (
    <View style={styles.wrapper}>
      <Header></Header>
      <TodoContainer></TodoContainer>
    </View>
  );
}

const styles = StyleSheet.create({

  wrapper: {
    flex:1,
    backgroundColor: "#171723",
    alignItems:"center"
    
  }

})

export default App;