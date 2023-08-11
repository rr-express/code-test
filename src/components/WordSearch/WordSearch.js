import React, { useState, useCallback } from 'react';
import Grid from '../Grid/Grid';
import WordList from '../WordList/WordList';
import { grid, words } from '../../data';

const WordSearch = () => {
  const [selected, setSelected] = useState([]);
  const [foundWords, setFoundWords] = useState([]);

  const toggleSelection = useCallback(
    (row, col) => {
      const isInFoundWord = foundWords.some((word) =>
        words[word].some(([r, c]) => r === row && c === col)
      );

      if (isInFoundWord) return;

      const index = selected.findIndex(([r, c]) => r === row && c === col);
      let newSelected =
        index !== -1
          ? [...selected.slice(0, index), ...selected.slice(index + 1)]
          : [...selected, [row, col]];

      for (const word in words) {
        if (
          words[word].every(
            ([r, c], i) =>
              newSelected[i] &&
              newSelected[i][0] === r &&
              newSelected[i][1] === c
          )
        ) {
          if (!foundWords.includes(word)) {
            setFoundWords((prev) => [...prev, word]);
            newSelected = [];
            break;
          }
        }
      }

      setSelected(newSelected);
    },
    [selected, foundWords]
  );

  const isCellSelected = useCallback(
    (row, col) => selected.some(([r, c]) => r === row && c === col),
    [selected]
  );

  const isCellFound = useCallback(
    (row, col) =>
      foundWords.some((word) =>
        words[word].some(([r, c]) => r === row && c === col)
      ),
    [foundWords]
  );

  return (
    <div className="App">
      <h1>Word Search</h1>
      <Grid
        grid={grid}
        isCellSelected={isCellSelected}
        isCellFound={isCellFound}
        onCellClick={toggleSelection}
      />
      <WordList words={words} foundWords={foundWords} />
    </div>
  );
};

export default WordSearch;
