import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const GuessForm = ({ correctAnswer }) => {
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = () => {
    setResult(guess === correctAnswer ? '¡Correcto!' : 'Incorrecto. Inténtalo de nuevo.');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={guess}
        onChangeText={(text) => setGuess(text)}
        placeholder="Escribe tu respuesta"
      />
      <Button title="Comprobar" onPress={handleSubmit} />
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 15,
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    marginBottom: 10,
  },
  result: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default GuessForm;
