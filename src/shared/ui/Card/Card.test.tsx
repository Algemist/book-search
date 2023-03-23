import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Button.test', () => {
    test('test render', () => {
        render(<Card>Text</Card>);
        expect(screen.getByText('Text')).toBeInTheDocument();
    });
});
