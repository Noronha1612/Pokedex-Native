import { RFValue } from "react-native-responsive-fontsize";
import styled, { DefaultTheme } from "styled-components/native";

type WithPokemomType = {
  type: keyof DefaultTheme['colors'];
};

export const Container = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.7,
}))<WithPokemomType>`
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme, type }) => theme.colors[type]};
  background-color: ${({ theme, type }) => theme.colors[type]};

  width: ${RFValue(96)}px;
  height: ${RFValue(104)}px;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 8px;

  position: relative;
`;

export const PokemonNumber = styled.Text<WithPokemomType>`
  position: absolute;
  top: 4px;
  right: 8px;
  font-size: ${RFValue(8)}px;
  color: ${({ theme, type }) => theme.colors[type]};
`;

export const PokemonImage = styled.Image`
  flex: 1;
`;

export const Footer = styled.View`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  width: 100%;
  height: ${RFValue(24)}px;

  justify-content: center;
  align-items: center;
`;

export const PokemonName = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(10)}px;
`;