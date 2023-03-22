import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookData, BooksSchema } from '../types/BooksSchema';
import { fetchBookDetails } from '../service/fetchBookDetails';
import { Book } from '../types/book';
import { fetchBooksData } from '../service/fetchBooksData';

const initialState: BooksSchema = {
    isLoading: false,
    error: undefined,
    data: [],
    totalItems: undefined,
    detailBook: undefined,
};

export const BookSlice = createSlice({
    name: 'Book',
    initialState,
    reducers: {
        setData: (state) => {
            state.data = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooksData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchBooksData.fulfilled, (state, action: PayloadAction<BookData>) => {
                state.isLoading = false;
                state.data = [...state.data, ...action.payload.items];
                state.totalItems = action.payload.totalItems;
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
