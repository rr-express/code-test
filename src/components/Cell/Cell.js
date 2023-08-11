const Cell = ({ letter, isFound, isSelected, onClick }) => (
  <div
    className={`cell ${isFound ? "found" : isSelected ? "selected" : ""}`}
    onClick={onClick}
  >
    {letter}
  </div>
);

export default Cell;
