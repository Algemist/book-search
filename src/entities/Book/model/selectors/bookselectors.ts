import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getBooksIsLoading = (state: StateSchema) => state.books.isLoading;
export const getBooksData = (state: StateSchema) => state.books.data?.items;
export const getBooksTotalItems = (state: StateSchema) => state.books.data?.totalItems;

export const getBooksError = (state: StateSchema) => state.books.error;
export const getBookDetails = (state: StateSchema) => state.books.detailBook;
