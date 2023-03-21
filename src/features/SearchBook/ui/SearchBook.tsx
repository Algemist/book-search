import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Categories, CategoriesSelect } from 'entities/Categories';
import { Sort, SortSelect } from 'entities/Sort';
import { fetchBooksData, getBooksIsLoading } from 'entities/Book';
import { SearchBookActions } from '../model/slice/SearchBookSlice';
import { getSearchBookCategory, getSearchBookSort, getSearchBookValue } from '../model/selectors/searchBookSelectors';
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
    const category = useSelector(getSearchBookCategory);
    const sort = useSelector(getSearchBookSort);
    const isLoading = useSelector(getBooksIsLoading);

    const onChangeValue = useCallback((value: string) => {
        dispatch(SearchBookActions.setValue(value));
    }, [dispatch]);

    const onClick = useCallback(() => {
        if (value) {
            dispatch(fetchBooksData({ value, category, sort }));
        }
    }, [category, dispatch, sort, value]);

    const onChangeCategory = useCallback((category?: Categories) => {
        dispatch(SearchBookActions.setCategory(category || Categories.ALL));
    }, [dispatch]);

    const onChangeSort = useCallback((sort?: Sort) => {
        dispatch(SearchBookActions.setSort(sort || Sort.RELEVANCE));
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
                <div className={cls.selects}>
                    <CategoriesSelect
                        onChange={onChangeCategory}
                        value={category}
                        className={cls.categorySelect}
                    />
                    <SortSelect
                        onChange={onChangeSort}
                        value={sort}
                        className={cls.sortSelect}
                    />
                </div>
                <Button
                    theme={ButtonTheme.BORDERED}
                    className={cls.button}
                    onClick={onClick}
                    disabled={isLoading}
                >
                    Search
                </Button>
            </div>
        </div>
    );
});
