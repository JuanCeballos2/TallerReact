import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Greeting = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>¡Hola, {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Greeting;
