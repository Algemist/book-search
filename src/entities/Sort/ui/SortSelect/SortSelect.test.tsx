import {
    fireEvent, getAllByTestId, render, screen,
} from '@testing-library/react';
import { Sort } from '../../model/types/sort';
import { SortSelect } from './SortSelect';

describe('CategoriesSelect.test', () => {
    test('render test', () => {
        render(<SortSelect />);
        const select = screen.getByDisplayValue('relevance');
        expect(select).toBeInTheDocument();
    });
    test('open select test', () => {
        render(<SortSelect />);
        const select = screen.getByDisplayValue<HTMLSelectElement>('relevance');
        expect(select).toBeInTheDocument();
        fireEvent.click(select);
        const options = getAllByTestId<HTMLOptionElement>(select, `${Sort.RELEVANCE}-select-option`);
        expect(options.length).toBe(2);
    });
});
