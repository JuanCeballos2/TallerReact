import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ThemeSwitcher = ({ onToggleTheme }) => {
  return (
      <View style={styles.container}>
          <Button title="Cambiar tema" onPress={onToggleTheme} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
});

export default ThemeSwitcher;
