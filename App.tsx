import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components/native';
import { Loading } from './components/Loading';
import { PokemonProvider } from './src/hooks/usePokemon';
import { PokemonList } from './src/screens/PokemonList';
import theme from './src/styles/theme';

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <Loading />;

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <PokemonProvider>
          <StatusBar style='auto' />
          <PokemonList />
        </PokemonProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}