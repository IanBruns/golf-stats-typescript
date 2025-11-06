import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from './page';

describe('Page', () => {
  it('renders a heading', () => {
    render(<HomePage />);
    expect(screen.getByText('Golf Stats')).toBeInTheDocument();
  });
});
