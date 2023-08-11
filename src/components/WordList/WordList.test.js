import React from 'react';
import { render, screen } from '@testing-library/react';
import WordList from './WordList';
import '@testing-library/jest-dom';

describe('WordList', () => {
  const words = {
    APPLE: [0, 0, 0, 0, 0],
    BANANA: [1, 1, 1, 1, 1, 1],
    CHERRY: [2, 2, 2, 2, 2, 2],
  };
  const foundWords = ['APPLE', 'CHERRY'];

  it('renders the words', () => {
    render(<WordList words={words} foundWords={foundWords} />);
    expect(screen.getByText('APPLE')).toBeInTheDocument();
    expect(screen.getByText('BANANA')).toBeInTheDocument();
    expect(screen.getByText('CHERRY')).toBeInTheDocument();
  });

  it("applies the 'found' class to found words", () => {
    render(<WordList words={words} foundWords={foundWords} />);
    expect(screen.getByTestId('APPLE')).toHaveClass('found');
    expect(screen.getByTestId('BANANA')).not.toHaveClass('found');
    expect(screen.getByTestId('CHERRY')).toHaveClass('found');
  });
});
