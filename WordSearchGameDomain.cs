class WordSearchGameDomain
{
    private Trie trie = new Trie();

    private WordSearchGameInput _input;

    private WordSearchGameOutput _output;

    public WordSearchGameDomain(WordSearchGameInput input)
    {
        _input = input;
        _output = new WordSearchGameOutput(_input);
    }

    public void Play()
    {

    }
}