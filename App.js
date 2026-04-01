import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

/**
 * RUTTA-App - Sistema de Movilidad Inteligente
 * Punto de entrada principal configurado para navegación escalable.
 */
const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
