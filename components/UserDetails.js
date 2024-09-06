import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserDetails = ({ name, age, occupation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.detailText}>Nombre: {name}</Text>
      <Text style={styles.detailText}>Edad: {age}</Text>
      <Text style={styles.detailText}>Ocupación: {occupation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  detailText: {
    fontSize: 18,
  },
});

export default UserDetails;
