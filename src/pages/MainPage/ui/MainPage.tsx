import { memo } from 'react';
import { SearchBook } from 'features/SearchBook/ui/SearchBook';
import { BookList } from 'entities/Book';
import cls from './MainPage.module.scss';

export const MainPage = memo(() => (
    <div>
        <SearchBook className={cls.search} />
        <BookList />
    </div>
));
