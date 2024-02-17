import { ColorValue } from "react-native";

    export interface Theme {
    type: 'light' | 'dark';
    colors: {
        primary: ColorValue;
        primaryVarient: ColorValue;
        secondary: ColorValue;
        secondaryVarient: ColorValue;
        background: ColorValue;
        onPrimary: ColorValue;
        onSecondary: ColorValue;
        onBackground: ColorValue;
    };
    }

    export const darkTheme: Theme = {
    type: 'dark',
    colors: {
        primary: '',
        onPrimary: '',
        primaryVarient: '',
        secondary: '',
        onSecondary: '',
        secondaryVarient: '',
        background: '',
        onBackground: '',
    },
    };

    export const lightTheme: Theme = {
    type: 'light',
    colors: {
        primary: '#3369FF',
        onPrimary: '#FFFFFF',
        primaryVarient: '#3369F0',
        secondary: '#E8E8E8',
        onSecondary: '#3E3E3E',
        secondaryVarient: '#F4F4F4',
        background: '#FFFFFF',
        onBackground: '#757575',
    },
    };
