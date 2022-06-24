import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Loading } from './components/Loading';
import { PokemonList } from './screens/PokemonList';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <Loading />;

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <PokemonList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
