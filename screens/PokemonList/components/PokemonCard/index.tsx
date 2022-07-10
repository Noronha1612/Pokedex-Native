
import {
  Container,
  Content,
  Footer,
  PokemonImage,
  PokemonName,
  PokemonNumber
} from "./styles";

export const PokemonCard = () => {
  const pokemonType = 'fire';

  return (
    <Container type={pokemonType}>
      <Content>
        <PokemonNumber type={pokemonType}>#004</PokemonNumber>

        <PokemonImage
          style={{ resizeMode: 'contain' }}
          source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png' }}
        />
      </Content>
      <Footer>
        <PokemonName>Charmander</PokemonName>
      </Footer>
    </Container>
  );
}