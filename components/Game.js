import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GuessForm from './GuessForm';

const Game = () => {
  const [correctAnswer] = useState('React Native');

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Adivina el nombre del framework:</Text>
      <GuessForm correctAnswer={correctAnswer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  prompt: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Game;
