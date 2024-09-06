import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title={isVisible ? 'Ocultar Texto' : 'Mostrar Texto'}
        onPress={() => setIsVisible(!isVisible)}
      />
      {isVisible && <Text style={styles.text}>Taller Realizado</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default ToggleText;
