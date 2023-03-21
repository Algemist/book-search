import { memo } from 'react';
import { SearchBook } from 'features/SearchBook/ui/SearchBook';
import { BookList, getBooksIsLoading } from 'entities/Book';
import { useSelector } from 'react-redux';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './MainPage.module.scss';

export const MainPage = memo(() => {
    const isLoading = useSelector(getBooksIsLoading);

    return (
        <div>
            <SearchBook className={cls.search} />
            {isLoading ? (
                <div className={cls.loader}>
                    <Loader />
                </div>
            ) : (
                <BookList />
            )}
        </div>
    );
});
