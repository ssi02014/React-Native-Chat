import React from 'react';
import { StatusBar, Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <StatusBar barStyle="light-content" />
            <Text>Chat App Setting</Text>
            <Text>Chat App Setting</Text>
        </ThemeProvider>
    )
}

export default App;