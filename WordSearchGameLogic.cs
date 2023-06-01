using System.Text;

class WordSearchGameLogic
{
    private Trie trie = new Trie();

    private WordSearchGameInput _input;

    public WordSearchGameLogic(WordSearchGameInput input)
    {
        _input = input;
    }

    public void Run()
    {
        WordSearchGameOutput output = new WordSearchGameOutput(_input);

        Trie trie = new Trie();

        foreach (string word in _input.Words)
        {
            trie.Add(word);
        }

        char[][] grid = _input.Grid;

        for (int r = 0; r < grid.Length; ++r)
        {
            for (int c = 0; c < grid[0].Length; ++c)
            {
                if (!trie.Root.Contains(grid[r][c]))
                    continue;

                TrieNode node = trie.Root.Get(grid[r][c]);

                List<(int, int)> coords = new List<(int, int)>();
                Backtrack(output, coords, trie, node, grid, r, c, Direction.Down);

                coords = new List<(int, int)>();
                Backtrack(output, coords, trie, node, grid, r, c, Direction.Right);
            }
        }

        PrintResults(output);
    }

    private void Backtrack(WordSearchGameOutput output, List<(int, int)> coords, Trie trie, TrieNode node, char[][] grid, int r, int c, Direction direction)
    {
        coords.Add((r, c));

        if (node.IsEnd)
        {
            StringBuilder sb = new StringBuilder();

            foreach ((int, int) tp in coords)
            {
                output.AddCoord(tp.Item1, tp.Item2);
                sb.Append(grid[tp.Item1][tp.Item2]);
            }

            string word = sb.ToString();

            output.MarkFoundWord(word);

            trie.Delete(word);
        }

        if (direction == Direction.Down)
        {
            if (r + 1 < grid.Length && node.Contains(grid[r + 1][c]))
            {
                Backtrack(output, coords, trie, node.Get(grid[r + 1][c]), grid, r + 1, c, direction);
            }
        }
        else if (direction == Direction.Right)
        {
            if (c + 1 < grid[0].Length && node.Contains(grid[r][c + 1]))
            {
                Backtrack(output, coords, trie, node.Get(grid[r][c + 1]), grid, r, c + 1, direction);
            }
        }
    }

    private void PrintResults(WordSearchGameOutput output)
    {
        Console.WriteLine("The grid:");
        Console.WriteLine(output.GetGridString());

        Console.WriteLine("The words found:");
        Console.WriteLine(output.GetFoundWordString());
        Console.WriteLine();

        Console.WriteLine("The words not found:");
        Console.WriteLine(output.GetNotFoundWordString());
        Console.WriteLine();
    }
}

enum Direction
{
    Left,
    Right,
    Up,
    Down,
}