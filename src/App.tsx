import { Box, ThemeProvider } from '@mui/system';
import React from 'react';
import Header from './components/Header'
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header></Header>
      </Box>
    </ThemeProvider>
  );
}

export default App;
