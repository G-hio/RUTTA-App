import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/**
 * RUTTA-App - Sistema de Movilidad Estudiantil UNICUCES
 * * Este es el punto de entrada principal. Se utiliza un Stack Navigator
 * para gestionar el flujo entre la autenticación y el mapa principal.
 */

// NOTA: Una vez creadas las pantallas en src/screens, se deben importar aquí:
// import LoginScreen from './src/screens/LoginScreen';
// import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#0056b3' }, // Azul institucional
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        {/* Comentamos las rutas temporalmente para que el repositorio 
          no marque error de "archivo no encontrado" hasta que subamos 
          las pantallas a la carpeta /src/screens/
        */}
        
        {/* <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }} 
        /> */}
        
        {/* <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Rutas UNICUCES' }} 
        /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
