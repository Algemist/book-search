import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookData, BooksSchema } from 'entities/Book/model/types/BooksSchema';
import { fetchBooksData } from '../service/fetchBooksData';

const initialState: BooksSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const BookSlice = createSlice({
    name: 'Book',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooksData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchBooksData.fulfilled, (state, action: PayloadAction<BookData>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchBooksData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: BookActions } = BookSlice;
export const { reducer: BookReducer } = BookSlice;
