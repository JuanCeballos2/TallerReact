import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const AlertButton = ({ showAlert }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title="Mostrar Alerta" onPress={showAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
});

export default AlertButton;
