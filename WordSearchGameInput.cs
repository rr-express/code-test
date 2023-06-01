using System.Text;

class WordSearchGameInput
{
    private HashSet<string> _wordSet = new HashSet<string>();

    public char[][] _grid;

    public WordSearchGameInput(int numRow, int numCol)
    {
        _grid = new char[numRow][];

        for (int i = 0; i < _grid.Length; ++i)
        {
            _grid[i] = new char[numCol];
        }
    }

    public IReadOnlySet<string> Words => _wordSet;

    public char[][] Grid => _grid;

    public void AddChar(char c, int row, int col)
    {
        if (row < 0 || row >= _grid.Length)
            throw new IndexOutOfRangeException();

        if (col < 0 || col >= _grid[row].Length)
            throw new IndexOutOfRangeException();

        _grid[row][col] = c;
    }

    public void AddWord(string word)
    {
        _wordSet.Add(word);
    }

    public string GetWordString()
    {
        StringBuilder sb = new StringBuilder();

        foreach (string word in _wordSet)
        {
            sb.Append(word + " ");
        }

        return sb.ToString();
    }
}