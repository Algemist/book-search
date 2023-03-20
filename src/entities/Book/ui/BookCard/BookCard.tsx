import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Book } from '../../model/types/book';
import cls from './BookCard.module.scss';

interface BookCardProps {
    className?: string;
    data?: Book;
}

export const BookCard = memo((props: BookCardProps) => {
    const {
        className,
        data,
    } = props;

    return (
        <Card className={classNames(cls.BookCard, {}, [className])}>
            <img
                className={cls.img}
                src={data?.volumeInfo.imageLinks?.thumbnail}
                alt={data?.volumeInfo.title}
            />
            <div>
                {data?.volumeInfo.title && (
                    <h2
                        className={cls.title}
                    >
                        {data?.volumeInfo.title}
                    </h2>
                )}
                {data?.volumeInfo.authors && (
                    <div className={cls.content}>
                        Authors:
                        {' '}
                        {data?.volumeInfo.authors?.join(',')}
                    </div>
                )}
            </div>
        </Card>
    );
});
