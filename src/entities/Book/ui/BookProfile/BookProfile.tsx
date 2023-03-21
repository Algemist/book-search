import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './BookProfile.module.scss';

interface BookProfileProps {
    className?: string;
}

export const BookProfile = memo((props: BookProfileProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.BookProfile, {}, [className])}>
            1
        </div>
    );
});
