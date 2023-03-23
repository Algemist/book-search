import { StateSchema } from 'app/providers/StoreProvider';

export const getBooksIsLoading = (state: StateSchema) => state.books.isLoading;
export const getBooksData = (state: StateSchema) => state.books.data;
export const getBooksTotalItems = (state: StateSchema) => state.books.totalItems;

export const getBooksError = (state: StateSchema) => state.books.error;
export const getBookDetails = (state: StateSchema) => state.books.detailBook;
