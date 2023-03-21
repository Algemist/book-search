import { ButtonHTMLAttributes, memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    BORDERED = 'bordered'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        theme = ButtonTheme.CLEAR,
        children,
        disabled = false,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            className={classNames(cls.Button, mods, [className])}
            type="button"
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
