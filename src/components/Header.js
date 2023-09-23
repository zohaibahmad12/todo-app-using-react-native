import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Header = ({ title }) => {

  
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5687ff', 
    padding: 20,
    alignItems: 'center',
   
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // White text
  },
});

export default Header;
