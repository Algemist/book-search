import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { Sort } from '../../model/types/sort';
import cls from './SortSelect.module.scss';

interface CategoriesSelectProps {
    className?: string;
    value?: Sort;
    onChange?: (value: Sort) => void;
}

const options: SelectOptions[] = [
    { value: 'relevance', content: 'relevance' },
    { value: 'newest', content: 'newest' },
];

export const SortSelect = memo((props: CategoriesSelectProps) => {
    const {
        className,
        value = Sort.RELEVANCE,
        onChange,
    } = props;

    const onChangeHandler = useCallback((value?: string) => {
        onChange?.(value as Sort);
    }, [onChange]);

    return (
        <Select
            options={options}
            value={value}
            onChange={onChangeHandler}
            label="Sort:"
            className={classNames(cls.CategoriesSelect, {}, [className])}
        />
    );
});
