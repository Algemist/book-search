import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { Book } from 'entities/Book/model/types/book';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchBooksData, getBooksIsLoading } from 'entities/Book';
import {
    getSearchBookCategory,
    getSearchBookSort,
    getSearchBookValue,
} from 'features/SearchBook/model/selectors/searchBookSelectors';
import { Loader } from 'shared/ui/Loader/Loader';
import { getBooksData, getBooksError, getBooksTotalItems } from '../../model/selectors/bookselectors';
import { BookCard } from '../BookCard/BookCard';
import cls from './BookList.module.scss';

interface BookListProps {
    className?: string;
}

export const BookList = memo((props: BookListProps) => {
    const {
        className,
    } = props;

    const data = useSelector(getBooksData);
    const totalItems = useSelector(getBooksTotalItems);
    const error = useSelector(getBooksError);
    const sort = useSelector(getSearchBookSort);
    const category = useSelector(getSearchBookCategory);
    const value = useSelector(getSearchBookValue);
    const isLoading = useSelector(getBooksIsLoading);
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1);

    const onClick = useCallback(() => {
        dispatch(fetchBooksData({
            page, sort, category, value,
        }));
        setPage(page + 1);
    }, [category, dispatch, page, sort, value]);

    if (error) {
        return (
            <div>
                Something went wrong... Pls try again
            </div>
        );
    }

    return (
        <div className={classNames(cls.BookList, {}, [className])}>
            {totalItems && (
                <div className={cls.totalItems}>
                    {`Found ${totalItems} results`}
                </div>
            )}
            {data.length !== 0 && (
                <div className={cls.list}>
                    {data.map((book) => (
                        <BookCard
                            key={book.etag}
                            data={book as Book}
                        />
                    ))}
                </div>
            )}
            {isLoading && (<div className={cls.loader}><Loader /></div>)}
            {data.length !== 0 && (
                <Button
                    theme={ButtonTheme.BORDERED}
                    onClick={onClick}
                >
                    load more
                </Button>
            )}
        </div>
    );
});
