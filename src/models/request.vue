<script>
  import axios from 'axios';

  import prodEnvironment from '@/config/prod.env.js';
  import devEnvironment from '@/config/dev.env.js';

  let serverUrl = devEnvironment.ROOT_API;

  if (process.env.NODE_ENV === 'production') { // eslint-disable-line
    serverUrl = prodEnvironment.ROOT_API;
  }

  const requestErrorHandler = async (error) => {
    console.error(error);

    if (error.message === 'Network Error') {
      alert('Falha na conexão. Verifique sua conexão e tente novamente!');
      throw Error('API_CONNECTION_ERROR');
    }

    switch (error.response.status) {
      case 401:
        return;
      case 403:
        if (error.response.data && error.response.data.error) {
          throw Error(error.response.data.error);
        }
        throw Error('API_FORBIDDEN'); // user does not have correct privileges
      case 404:
        throw Error('API_NOT_FOUND');
      case 413:
        throw Error('API_REQUEST_TOO_LARGE');
      case 429:
        throw Error('API_RATE_LIMIT');
      case 500:
        throw Error('API_SERVER_ERROR');
      default:
        throw error.response.data;
    }
  };

  export default {
    async send(apiName, command, data) {
      try {
        const response = await axios.request({
          url: `${serverUrl}/v1/${apiName}/${command}`,
          method: 'post',
          withCredentials: true,
          data: {
            data,
          },
        });
        return response.data;
      } catch (error) {
        return requestErrorHandler(error);
      }
    },
    async sendFormData(apiName, command, data) {
      try {
        const response = await axios.request({
          url: `${serverUrl}/v1/${apiName}/${command}`,
          method: 'post',
          withCredentials: true,
          crossdomain: true,
          data,
        });
        return response.data;
      } catch (error) {
        return requestErrorHandler(error);
      }
    },
  };
</script>
