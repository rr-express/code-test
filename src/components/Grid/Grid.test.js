import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Grid from './Grid';
import '@testing-library/jest-dom';

describe('Grid', () => {
  const grid = [
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'I'],
  ];

  it('renders the grid', () => {
    const { getByText } = render(
      <Grid
        grid={grid}
        isCellSelected={() => false}
        isCellFound={() => false}
        onCellClick={() => {}}
      />
    );
    expect(getByText('A')).toBeInTheDocument();
    expect(getByText('B')).toBeInTheDocument();
    expect(getByText('C')).toBeInTheDocument();
    expect(getByText('D')).toBeInTheDocument();
    expect(getByText('E')).toBeInTheDocument();
    expect(getByText('F')).toBeInTheDocument();
    expect(getByText('G')).toBeInTheDocument();
    expect(getByText('H')).toBeInTheDocument();
    expect(getByText('I')).toBeInTheDocument();
  });

  it("applies the 'selected' class to selected cells", () => {
    const isCellSelected = (rowIndex, colIndex) =>
      rowIndex === 0 && colIndex === 0;
    const { container } = render(
      <Grid
        grid={grid}
        isCellSelected={isCellSelected}
        isCellFound={() => false}
        onCellClick={() => {}}
      />
    );
    expect(container.firstChild.firstChild.firstChild).toHaveClass('selected');
  });

  it("applies the 'found' class to found cells", () => {
    const isCellFound = (rowIndex, colIndex) =>
      rowIndex === 0 && colIndex === 0;
    const { container } = render(
      <Grid
        grid={grid}
        isCellSelected={() => false}
        isCellFound={isCellFound}
        onCellClick={() => {}}
      />
    );
    expect(container.firstChild.firstChild.firstChild).toHaveClass('found');
  });

  it('calls the onCellClick prop when a cell is clicked', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <Grid
        grid={grid}
        isCellSelected={() => false}
        isCellFound={() => false}
        onCellClick={handleClick}
      />
    );
    fireEvent.click(container.firstChild.firstChild.firstChild);
    expect(handleClick).toHaveBeenCalledWith(0, 0);
  });
});
