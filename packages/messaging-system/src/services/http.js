// External dependencies
import axios from 'axios';

// Internal dependencies
import config from '../../config';

// Set up axios
const http = axios.create({
  baseURL: config.API_URL,
});

export default http;
