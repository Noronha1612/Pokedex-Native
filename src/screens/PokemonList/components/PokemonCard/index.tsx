
import { DefaultTheme } from "styled-components/native";
import {
  Container,
  Content,
  Footer,
  PokemonImage,
  PokemonName,
  PokemonNumber
} from "./styles";

type PokemonCardProps = {
  type: keyof DefaultTheme['colors'];
  pokeNumber: number;
  imageUri: string;
  name: string;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({
  name,
  type,
  imageUri,
  pokeNumber
}) => {
  return (
    <Container type={type}>
      <Content>
        <PokemonNumber type={type}>{pokeNumber}</PokemonNumber>

        <PokemonImage
          style={{ resizeMode: 'contain' }}
          source={{ uri: imageUri }}
        />
      </Content>
      <Footer>
        <PokemonName>{name}</PokemonName>
      </Footer>
    </Container>
  );
}