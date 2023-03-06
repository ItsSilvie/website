import { Container } from '@mui/material';
import { Box, ThemeProvider } from '@mui/system';
import React from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header />
        <Container
          component="main"
          sx={{ p: 3 }}
        >
          <Body />
          <Footer />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
