import { Book } from './book';

export type BookData = {
    kind: string;
    totalItems: number;
    items: Book[];
}

export interface BooksSchema {
    isLoading: boolean;
    error?: string;
    data?: BookData;
}
