import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Categories } from 'entities/Categories';
import { Sort } from 'entities/Sort';
import { SearchBookSchema } from '../types/searchBook';

const initialState: SearchBookSchema = {
    isLoading: false,
    value: '',
    categories: Categories.ALL,
    sort: Sort.RELEVANCE,
};

export const SearchBookSlice = createSlice({
    name: 'SearchBook',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
        setCategory: (state, action: PayloadAction<Categories>) => {
            state.categories = action.payload;
        },
        setSort: (state, action: PayloadAction<Sort>) => {
            state.sort = action.payload;
        },
    },
});

export const { actions: SearchBookActions } = SearchBookSlice;
export const { reducer: SearchBookReducer } = SearchBookSlice;
