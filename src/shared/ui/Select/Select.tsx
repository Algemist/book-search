import { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

export interface SelectOptions {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOptions[];
    value?: string;
    onChange?: (value?: string) => void;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        options,
        value,
        onChange,
        label,
    } = props;

    const optionList = useMemo(() => options?.map((opt) => (
        <option
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames('', {}, [className])}>
            {label && (
                <span className={classNames('', {}, [className])}>
                    {`${label} `}
                </span>
            )}
            <select
                value={value}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
});
