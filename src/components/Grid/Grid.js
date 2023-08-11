import Cell from '../Cell/Cell';

const Grid = ({ grid, isCellSelected, isCellFound, onCellClick }) => (
  <div className="grid" data-testid="word-search-grid">
    {grid.map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map((letter, colIndex) => (
          <Cell
            key={colIndex}
            letter={letter}
            isSelected={isCellSelected(rowIndex, colIndex)}
            isFound={isCellFound(rowIndex, colIndex)}
            onClick={() => onCellClick(rowIndex, colIndex)}
          />
        ))}
      </div>
    ))}
  </div>
);

export default Grid;
