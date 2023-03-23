import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Button.test', () => {
    test('test render', () => {
        render(<Input value="Text" />);
        const input = screen.getByDisplayValue<HTMLInputElement>('Text');
        expect(input).toBeInTheDocument();
    });
});
