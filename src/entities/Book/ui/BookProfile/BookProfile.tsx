import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getBookDetails } from 'entities/Book';
import cls from './BookProfile.module.scss';

interface BookProfileProps {
    className?: string;
}

export const BookProfile = memo((props: BookProfileProps) => {
    const {
        className,
    } = props;

    const bookDetails = useSelector(getBookDetails);

    if (!bookDetails) {
        return (
            <div>
                something went wrong... Pls try again
            </div>
        );
    }

    return (
        <div className={classNames(cls.BookProfile, {}, [className])}>
            <h1>{bookDetails.volumeInfo.title}</h1>
            {bookDetails.volumeInfo.imageLinks?.large
                && (
                    <img
                        src={bookDetails.volumeInfo.imageLinks?.small}
                        alt={bookDetails.volumeInfo.title}
                        className={cls.img}
                    />
                )}
            {bookDetails.volumeInfo.description && (
                <div
                    className={cls.description}
                    dangerouslySetInnerHTML={{ __html: bookDetails.volumeInfo.description }}
                />
            )}
            {bookDetails.volumeInfo.authors && (
                <div className={cls.authors}>
                    {`Authors: ${bookDetails.volumeInfo.authors.join(', ')}`}
                </div>
            )}
            {bookDetails.volumeInfo.categories && (
                <div>
                    {`Categories: ${bookDetails.volumeInfo.categories.join(', ')}`}
                </div>
            )}
        </div>
    );
});
