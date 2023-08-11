import React from 'react';
import { render, screen } from '@testing-library/react';
import WordSearch from './WordSearch';
import '@testing-library/jest-dom';

jest.mock('../../data', () => ({
  grid: [
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'I'],
  ],
  words: {
    ABC: [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    DEF: [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    GHI: [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
  },
}));

describe('WordSearch', () => {
  it('renders the grid and word list', () => {
    render(<WordSearch />);
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
    expect(screen.getByText('C')).toBeInTheDocument();
    expect(screen.getByText('D')).toBeInTheDocument();
    expect(screen.getByText('E')).toBeInTheDocument();
    expect(screen.getByText('F')).toBeInTheDocument();
    expect(screen.getByText('G')).toBeInTheDocument();
    expect(screen.getByText('H')).toBeInTheDocument();
    expect(screen.getByText('I')).toBeInTheDocument();
    expect(screen.getByText('ABC')).toBeInTheDocument();
    expect(screen.getByText('DEF')).toBeInTheDocument();
    expect(screen.getByText('GHI')).toBeInTheDocument();
  });
});
