import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './DetailsPage.module.scss';

interface DetailsPageProps {
    className?: string;
}

export const DetailsPage = memo((props: DetailsPageProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.DetailsPage, {}, [className])}>
            details Page
        </div>
    );
});
