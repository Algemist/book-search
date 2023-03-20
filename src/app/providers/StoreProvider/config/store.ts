import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { SearchBookReducer } from 'features/SearchBook';
import { BookReducer } from 'entities/Book';
import { $api } from 'shared/api/config';
import { StateSchema } from './StateSchema';

const rootReducer = combineReducers<StateSchema>({
    searchBook: SearchBookReducer,
    books: BookReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                api: $api,
            },
        },
    }),
});

export type AppDispatch = typeof store.dispatch;
