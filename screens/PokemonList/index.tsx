import { PokeballSVG } from "../../assets/icons/Pokeball";
import { SortingArrow } from "../../components/SortingArrow";
import {
    Container,
    Header,
    HeaderRow,
    HeaderTitle,
    HeaderWrapper,
    SearchInput
} from "./styles";

export const PokemonList = () => {
    return (
        <Container>
            <Header>
                <HeaderRow>
                    <HeaderWrapper>
                        <PokeballSVG size={32} />
                        <HeaderTitle>Pokédex</HeaderTitle>
                    </HeaderWrapper>
                    <SortingArrow />
                </HeaderRow>

                <SearchInput placeholder="🔎  Procurar" />
            </Header>
        </Container>
    );
}