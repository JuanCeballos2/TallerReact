import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ChildCounter from './ChildCounter';

const ParentCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contador del Padre: {count}</Text>
      <ChildCounter count={count} onIncrement={incrementCount} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ParentCounter;

