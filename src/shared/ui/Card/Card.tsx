import { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface CardProps {
    className?: string;
    children: ReactNode;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
    } = props;

    return (
        <article className={classNames(cls.Card, {}, [className])}>
            {children}
        </article>
    );
});
