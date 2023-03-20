import axios from 'axios';

export const API_KEY = 'AIzaSyAP8LvX2R7yyuT30VRzOOA2XRnmv1kt9Yw';
export const URL = ' https://www.googleapis.com/books';

export const $api = axios.create({
    baseURL: URL,
});
