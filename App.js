import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PublicRoutes from './src/routes/PublicRoutes';
import PrivateRoutes from './src/routes/PrivateRoutes';

import AuthContext from './src/contexts/AuthContext';
import { useState } from 'react';

export default function App() {

  const[logado, setLogado] = useState(false);

  return (
    <AuthContext.Provider value={{ logado, setLogado }}>
      <View style={styles.container}>
        {logado ? <PrivateRoutes /> : <PublicRoutes />}
      </View>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
