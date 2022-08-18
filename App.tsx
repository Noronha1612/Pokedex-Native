import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Loading } from './components/Loading';
import { AsyncStorageProvider } from './src/hooks/useAsyncStorage';
import { PokemonProvider } from './src/hooks/usePokemon';
import { PokemonList } from './src/screens/PokemonList';
import theme from './src/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <Loading />;

  return (
    <ThemeProvider theme={theme}>
      <AsyncStorageProvider>
        <PokemonProvider>
          <StatusBar style='auto' />
          <PokemonList />
        </PokemonProvider>
      </AsyncStorageProvider>
    </ThemeProvider>
  );
}