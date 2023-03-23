import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button.test', () => {
    test('test render', () => {
        render(<Button>Text</Button>);
        expect(screen.getByText('Text')).toBeInTheDocument();
    });
    test('test render with bordered class', () => {
        render(<Button theme={ButtonTheme.BORDERED}>Text</Button>);
        expect(screen.getByText('Text')).toBeInTheDocument();
        expect(screen.getByText('Text')).toHaveClass('bordered');
    });
});
