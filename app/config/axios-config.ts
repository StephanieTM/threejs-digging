import axios from 'axios';
import { createStandaloneToast } from '@chakra-ui/react';

const toast = createStandaloneToast();

export function configAxios(): void {
  axios.interceptors.response.use(response => {
    return response.data;
  }, error => {
    if (error.response.config.headers.silent !== true) {
      if (error.response.status === 404) {
        toast({
          status: 'error',
          description: `${error.response.status}, ${error.response.config.url} not found.`,
        });
      } else {
        toast({
          status: 'error',
          description: error.response.data.message || error.response.data.error || error.response.data,
        });
      }
    }
  
    return Promise.reject(error);
  });
}
