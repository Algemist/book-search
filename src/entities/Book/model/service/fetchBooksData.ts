import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { API_KEY } from 'shared/api/config';
import { BookData } from '../types/BooksSchema';

export type Data = {value: string, category: string, sort: string, page:number}

export const fetchBooksData = createAsyncThunk<BookData, Data, ThunkConfig<string>>(
    'books/fetchBooksData',
    async (data, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
        } = thunkAPI;

        try {
            const url = `/v1/volumes?q=${data.value}+subject: ${data.category}&startIndex=${data.page}&maxResults=10&orderBy=${data.sort}&key=${API_KEY}`;
            const response = await extra.api.get<BookData>(url);
            if (!response.data.items) {
                throw new Error('end');
            }
            return response.data;
        } catch (e) {
            if (e instanceof Error) {
                return rejectWithValue(e.message);
            }
            return rejectWithValue('error');
        }
    },
);
