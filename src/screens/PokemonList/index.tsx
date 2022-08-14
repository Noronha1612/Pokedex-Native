import { FlatList, ListRenderItem, View } from "react-native";
import { PokeballSVG } from "../../../assets/icons/Pokeball";
import { SortingArrow } from "../../../components/SortingArrow";
import { Loading } from "../../components/Loading";
import { usePokemon } from "../../hooks/usePokemon";
import { Pokemon } from "../../models/Pokemon";
import { PokemonCard } from "./components/PokemonCard";
import {
    Container,
    Content,
    Header,
    HeaderRow,
    HeaderTitle,
    HeaderWrapper,
    SearchInput
} from "./styles";

export const PokemonList = () => {
    const { currentlyFetched, fetchNextPage, isFetching } = usePokemon();

    const renderItemOnList: ListRenderItem<Pokemon> = ({ item }) => (
        <PokemonCard
            key={item.id}
            imageUri={item.sprites.other["official-artwork"].front_default}
            type={item.types[0].type.name}
            pokeNumber={item.id}
            name={item.name}
        />
    )

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

            <Content>
                {isFetching && !currentlyFetched.length && <Loading />}
                <FlatList 
                    data={currentlyFetched}
                    renderItem={renderItemOnList}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    columnWrapperStyle={{ justifyContent: 'space-evenly', paddingBottom: 8 }}
                    onEndReached={fetchNextPage}

                />
            </Content>
        </Container>
    );
}