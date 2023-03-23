import {
    fireEvent, getAllByTestId, render, screen,
} from '@testing-library/react';
import { Categories } from '../../model/types/categories';
import { CategoriesSelect } from './CategoriesSelect';

describe('CategoriesSelect.test', () => {
    test('render test', () => {
        render(<CategoriesSelect />);
        const select = screen.getByDisplayValue('all');
        expect(select).toBeInTheDocument();
    });
    test('open select test', () => {
        render(<CategoriesSelect />);
        const select = screen.getByDisplayValue<HTMLSelectElement>('all');
        expect(select).toBeInTheDocument();
        fireEvent.click(select);
        const options = getAllByTestId<HTMLOptionElement>(select, `${Categories.ALL}-select-option`);
        expect(options.length).toBe(7);
    });
});
