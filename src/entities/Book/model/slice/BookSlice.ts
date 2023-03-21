import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookData, BooksSchema } from 'entities/Book/model/types/BooksSchema';
import { fetchBookDetails } from 'entities/Book';
import { Book } from 'entities/Book/model/types/book';
import { fetchBooksData } from '../service/fetchBooksData';

const initialState: BooksSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
    detailBook: undefined,
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
            })
            .addCase(fetchBookDetails.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchBookDetails.fulfilled, (state, action: PayloadAction<Book>) => {
                state.isLoading = false;
                state.detailBook = action.payload;
            })
            .addCase(fetchBookDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: BookActions } = BookSlice;
export const { reducer: BookReducer } = BookSlice;
