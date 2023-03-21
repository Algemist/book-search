import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { Book } from 'entities/Book/model/types/book';
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
            <div className={cls.list}>
                {data && (
                    data.map((book) => (
                        <BookCard
                            key={book.etag}
                            data={book as Book}
                        />
                    ))
                )}
            </div>
        </div>
    );
});
