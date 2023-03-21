import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/providers/RouteProvider/config/routeConfig';
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
            <div className={cls.content}>
                {data?.volumeInfo.title && (
                    <AppLink
                        to={RoutePath.details_page + data.id}
                        className={cls.title}
                    >
                        {data?.volumeInfo.title}
                    </AppLink>
                )}
                {data?.volumeInfo.authors && (
                    <div>
                        {`Authors: ${data?.volumeInfo.authors?.join(',')}`}
                    </div>
                )}
                {data?.volumeInfo.categories && (
                    <div>
                        {`Categories ${data.volumeInfo.categories[0]}`}
                    </div>
                )}
            </div>
        </Card>
    );
});
