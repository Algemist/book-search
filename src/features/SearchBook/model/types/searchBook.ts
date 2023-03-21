import { Categories } from 'entities/Categories';
import { Sort } from 'entities/Sort';

export interface SearchBookSchema {
    value: string;
    categories: Categories;
    sort: Sort;
}
