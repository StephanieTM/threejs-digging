import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      200: '#ff7d37',
      500: '#ffc11f',
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: `Rubik, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      },
    },
  },
});
