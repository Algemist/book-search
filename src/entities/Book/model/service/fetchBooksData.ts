import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { API_KEY } from 'shared/api/config';
import { BookData } from '../types/BooksSchema';

export const fetchBooksData = createAsyncThunk<BookData, void, ThunkConfig<string>>(
    'books/fetchBooksData',
    async (_, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
        } = thunkAPI;

        try {
            const response = await extra.api.get<BookData>(`/v1/volumes?q=react&key=${API_KEY}`);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
