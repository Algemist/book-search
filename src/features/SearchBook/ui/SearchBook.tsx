import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getSearchBookValue } from 'features/SearchBook/model/selectors/searchBookSelectors';
import { SearchBookActions } from 'features/SearchBook';
import cls from './SearchBook.module.scss';

interface SearchBookProps {
    className?: string;
}

export const SearchBook = memo((props: SearchBookProps) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();
    const value = useSelector(getSearchBookValue);

    const onChangeValue = useCallback((value: string) => {
        dispatch(SearchBookActions.setValue(value));
    }, [dispatch]);

    return (
        <div className={classNames(cls.SearchBook, {}, [className])}>
            <h1 className={cls.title}>Search for books</h1>
            <div className={cls.searchBlock}>
                <Input
                    className={cls.input}
                    value={value || ''}
                    onChange={onChangeValue}
                    placeholder="find book..."
                />
                <Button
                    theme={ButtonTheme.BORDERED}
                    className={cls.button}
                >
                    Search
                </Button>
            </div>
        </div>
    );
});
