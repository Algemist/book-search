import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { Categories } from '../../model/types/categories';
import cls from './CategoriesSelect.module.scss';

interface CategoriesSelectProps {
    className?: string;
    value?: Categories;
    onChange?: (value: Categories) => void;
}

const options: SelectOptions[] = [
    { value: 'all', content: 'all' },
    { value: 'art', content: 'art' },
    { value: 'biography', content: 'biography' },
    { value: 'computers', content: 'computers' },
    { value: 'history', content: 'history' },
    { value: 'medical', content: 'medical' },
    { value: 'poetry', content: 'poetry' },
];

export const CategoriesSelect = memo((props: CategoriesSelectProps) => {
    const {
        className,
        value = Categories.ALL,
        onChange,
    } = props;

    const onChangeHandler = useCallback((value?: string) => {
        onChange?.(value as Categories);
    }, [onChange]);

    return (
        <Select
            options={options}
            value={value}
            onChange={onChangeHandler}
            label="Categories:"
            className={classNames(cls.CategoriesSelect, {}, [className])}
        />
    );
});
