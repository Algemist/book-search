import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';

interface AppLinkProps extends LinkProps {
    className?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        className,
        children,
        to,
        ...others
    } = props;

    return (
        <Link
            to={to}
            className={classNames('', {}, [className])}
            {...others}
        >
            {children}
        </Link>
    );
});
