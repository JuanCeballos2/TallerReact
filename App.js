import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Importación de componentes
import Greeting from './components/Greeting';
import UserDetails from './components/UserDetails';
import Task from './components/Task';
import ToggleText from './components/ToggleText';
import DynamicForm from './components/DynamicForm';
import ClickCounter from './components/ClickCounter';
import RegistrationForm from './components/RegistrationForm';
import ThemeSwitcher from './components/ThemeSwitcher';
import AlertButton from './components/AlertButton';
import ParentCounter from './components/ParentCounter';
import ImageList from './components/ImageList';
import Game from './components/Game';

function App() {
  const [userData, setUserData] = useState(null);
  const [theme, setTheme] = useState('light');

  const handleRegistration = (data) => {
    setUserData(data);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const currentStyles = theme === 'light' ? styles.light : styles.dark;

  const showAlert = () => {
    alert('¡ALERTAA!');
  };

  const imageUrls = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/400px-Cristiano_Ronaldo_2018.jpg',
    'https://pbs.twimg.com/media/GH-0G38WAAEpuKK.jpg:large',
  ];

  return (
    <ScrollView style={[styles.container, currentStyles]}>
      <View style={[styles.card, currentStyles]}>
        <Greeting name="Juan" />
      </View>

      <View style={[styles.card, currentStyles]}>
        <UserDetails name="Juan" age={20} occupation="Desarrollador" />
      </View>

      <View style={[styles.card, currentStyles]}>
        <Task task={{ title: 'Taller React Native', completed: true }} />
      </View>

      <View style={[styles.card, currentStyles]}>
        <ToggleText />
      </View>

      <View style={[styles.card, currentStyles]}>
        <DynamicForm />
      </View>

      <View style={[styles.card, currentStyles]}>
        <ClickCounter />
      </View>

      <View style={[styles.card, currentStyles]}>
        <RegistrationForm onSubmit={handleRegistration} />
        {userData && (
          <View>
            <Text style={styles.subheading}>Datos Registrados:</Text>
            <Text>Nombre: {userData.name}</Text>
            <Text>Correo: {userData.email}</Text>
            <Text>Contraseña: {userData.password}</Text>
          </View>
        )}
      </View>

      <ThemeSwitcher onToggleTheme={toggleTheme} />

      <View style={[styles.card, currentStyles]}>
        <ParentCounter />
      </View>

      <View style={[styles.card, currentStyles]}>
        <AlertButton showAlert={showAlert} />
      </View>

      <View style={[styles.card, currentStyles]}>
        <ImageList images={imageUrls} />
      </View>

      <View style={[styles.card, currentStyles]}>
        <Game />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  light: {
    backgroundColor: '#f0f0f0',
    color: '#000',
  },
  dark: {
    backgroundColor: '#333',
    color: '#fff',
  },
});

export default App;
