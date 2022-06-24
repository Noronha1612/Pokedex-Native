import 'styled-components';
import 'react-native-svg';
import { theme } from './theme';

declare module 'styled-components' {
    type ThemeProps = typeof theme;

    export interface DefaultTheme extends ThemeProps {}
}