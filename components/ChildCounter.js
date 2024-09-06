import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ChildCounter = ({ count, onIncrement }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador del Hijo: {count}</Text>
      <Button title="Incrementar" onPress={onIncrement} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ChildCounter;
