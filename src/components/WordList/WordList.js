const WordList = ({ words, foundWords }) => (
  <div className="words-list">
    <h2>Words to Search For</h2>
    {Object.keys(words).map((word) => (
      <div
        key={word}
        data-testid={word}
        className={`word ${foundWords.includes(word) ? 'found' : ''}`}
      >
        {word}
      </div>
    ))}
  </div>
);

export default WordList;
