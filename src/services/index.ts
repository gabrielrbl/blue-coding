import axios from 'axios';

export const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const BASE_URL = 'http://api.giphy.com/v1';

export const api = axios.create({baseURL: BASE_URL})

export * from './search';
