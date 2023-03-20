import { SearchBookSchema } from 'features/SearchBook';
import { BooksSchema } from 'entities/Book';
import { AxiosInstance } from 'axios';

export interface StateSchema {
    searchBook: SearchBookSchema;
    books: BooksSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
