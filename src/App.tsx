import { Box, ThemeProvider } from '@mui/system';
import React from 'react';
import Body from './components/Body';
import Header from './components/Header';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header />
        <Body />
      </Box>
    </ThemeProvider>
  );
}

export default App;
