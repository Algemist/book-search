import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchBookSchema } from '../types/searchBook';

const initialState: SearchBookSchema = {
    isLoading: false,
    value: '',
};

export const SearchBookSlice = createSlice({
    name: 'SearchBook',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { actions: SearchBookActions } = SearchBookSlice;
export const { reducer: SearchBookReducer } = SearchBookSlice;
