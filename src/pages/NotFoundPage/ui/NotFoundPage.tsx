import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = memo((props: NotFoundPageProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            Not found page
        </div>
    );
});
