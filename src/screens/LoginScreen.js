import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { loginWithFirebase } from '../services/firebase'; // Mock de servicio

/**
 * LoginScreen - Pantalla de autenticación para estudiantes de UNICUCES.
 */
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí llamarías a la lógica de Firebase Auth
    console.log('Login intentado con:', email);
    navigation.replace('Home'); // Navegación de prueba
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RUTTA-App</Text>
      <TextInput style={styles.input} placeholder="Correo UNICUCES" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Ingresar" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5 },
});

export default LoginScreen;
