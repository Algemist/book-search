import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { API_KEY } from 'shared/api/config';
import { Book } from 'entities/Book/model/types/book';

export const fetchBookDetails = createAsyncThunk<Book, string, ThunkConfig<string>>(
    'books/fetchBookDetails',
    async (bookId, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
        } = thunkAPI;

        try {
            const url = `/v1/volumes/${bookId}`;
            const response = await extra.api.get<Book>(url);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
