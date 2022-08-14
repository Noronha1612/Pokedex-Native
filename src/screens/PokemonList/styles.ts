import { Platform, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.background};
    
    padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

export const Header = styled.View`
    margin-top: ${RFValue(16)}px;
    padding: 0 ${RFValue(16)}px;
`;

export const HeaderRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: ${RFValue(32)}px;
`;

export const HeaderWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const HeaderTitle = styled.Text`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.darkgray};
    font-family: ${({ theme }) => theme.fonts.bold};

    margin-left: ${RFValue(16)}px;
`;

export const SearchInput = styled.TextInput`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    text-align: center;
    font-size: ${RFValue(10)}px;
    padding: ${RFValue(8)}px 0;

    margin-top: 12px;

    border-radius: 8px;
    border-color: ${({ theme }) => theme.colors.lightgray};
    border-width: 1px;
`;

export const Content = styled.View`
    padding: ${RFValue(16)}px;
    flex: 1;
`;
