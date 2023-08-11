import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Cell from './Cell';
import '@testing-library/jest-dom';

describe('Cell', () => {
  it('renders the letter prop', () => {
    const { getByText } = render(<Cell letter="A" />);
    expect(getByText('A')).toBeInTheDocument();
  });

  it("applies the 'found' class when isFound prop is true", () => {
    const { container } = render(<Cell isFound />);
    expect(container.firstChild).toHaveClass('found');
  });

  it("applies the 'selected' class when isSelected prop is true", () => {
    const { container } = render(<Cell isSelected />);
    expect(container.firstChild).toHaveClass('selected');
  });

  it('calls the onClick prop when clicked', () => {
    const handleClick = jest.fn();
    const { container } = render(<Cell onClick={handleClick} />);
    fireEvent.click(container.firstChild);
    expect(handleClick).toHaveBeenCalled();
  });
});
