import { memo, useEffect } from 'react';
import { SearchBook } from 'features/SearchBook/ui/SearchBook';
import { BookList, getBooksIsLoading } from 'entities/Book';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { fetchBooksData } from 'entities/Book/model/service/fetchBooksData';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './MainPage.module.scss';

export const MainPage = memo(() => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getBooksIsLoading);

    return (
        <div>
            <SearchBook className={cls.search} />
            {isLoading ? (
                <Loader />
            ) : (
                <BookList />
            )}
        </div>
    );
});
