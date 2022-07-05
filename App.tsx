import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Loading } from './components/Loading';
import { PokemonList } from './screens/PokemonList';
import theme from './styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <Loading />;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='auto' />
      <SafeAreaView>
        <PokemonList />
      </SafeAreaView>
    </ThemeProvider>
  );
}