import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = ({ task }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.status}>
        {task.completed ? 'Completada' : 'No completada'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 16,
  },
});

export default Task;
