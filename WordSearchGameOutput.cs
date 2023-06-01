using System.Text;

class WordSearchGameOutput
{
    private HashSet<string> _wordFoundSet = new HashSet<string>();

    private HashSet<string> _wordNotFoundSet = new HashSet<string>();

    private char[][] _grid;

    private Coord _coordinates;

    public WordSearchGameOutput(WordSearchGameInput input)
    {
        _grid = new char[input.Grid.Length][];

        for (int i = 0; i < _grid.Length; ++i)
        {
            _grid[i] = new char[input.Grid[i].Length];

            for (int j = 0; j < _grid[i].Length; ++j)
            {
                _grid[i][j] = input.Grid[i][j];
            }
        }

        _wordNotFoundSet = new HashSet<string>(input.Words);

        _coordinates = new Coord();
    }

    public void AddCoord(int rowIndex, int colIndex)
    {
        _coordinates.Add(rowIndex, colIndex);
    }

    public void MarkFoundWord(string word)
    {
        _wordFoundSet.Add(word);
        _wordNotFoundSet.Remove(word);
    }

    public string GetGridString()
    {
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < _grid.Length; ++i)
        {
            for (int j = 0; j < _grid[i].Length; ++j)
            {
                if (_coordinates.Contains(i, j))
                    sb.Append("[" + _grid[i][j] + "]");
                else
                    sb.Append(" " + _grid[i][j] + " ");
            }

            sb.AppendLine();
        }

        return sb.ToString();
    }

    public string GetFoundWordString()
    {
        StringBuilder sb = new StringBuilder();

        foreach (string word in _wordFoundSet)
            sb.Append(word + " ");

        return sb.ToString();
    }

    public string GetNotFoundWordString()
    {
        StringBuilder sb = new StringBuilder();

        foreach (string word in _wordNotFoundSet)
            sb.Append(word + " ");

        return sb.ToString();
    }
}