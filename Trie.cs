class Trie
{
    public Trie()
    {
        Root = new TrieNode();
    }

    public TrieNode Root { get; set; }

    public int Count { get; set; }

    public bool Contains(string key)
    {
        TrieNode node = Root;

        foreach (char c in key)
        {
            if (!node.Contains(c))
                return false;

            node = node.Get(c);
        }

        return node.IsEnd;
    }

    public void Add(string key)
    {
        TrieNode node = Root;

        foreach (char c in key)
        {
            if (!node.Contains(c))
                node.Add(c);

            node = node.Get(c);
        }

        node.IsEnd = true;
    }

    public TrieNode Delete(string key)
    {
        return Delete(Root, key, 0);
    }

    private TrieNode Delete(TrieNode node, string key, int length)
    {
        if (node == null)
            return null;

        if (length == key.Length)
        {
            if (node.IsEnd)
                Count--;

            node.IsEnd = false;
        }
        else
        {
            char c = key[length];
            node.Remove(c);
        }

        // remove subtrie rooted at node if it is completely empty
        // If the flag of the node is true, keep it
        if (node.IsEnd)
            return node;

        // Else if, the node has at least one child, keep it
        // This node is a prefix of other words
        if (node.NumberOfChildren > 0)
            return node;

        // Otherwise, return null to remove this node
        return null;
    }
}

class TrieNode
{
    private Dictionary<char, TrieNode> _children;

    public TrieNode()
    {
        _children = new Dictionary<char, TrieNode>();
    }

    public bool IsEnd { get; set; }

    public int NumberOfChildren => _children.Count;

    public TrieNode Get(char c)
    {
        if (!_children.ContainsKey(c))
            return null;

        return _children[c];
    }

    public bool Contains(char c)
    {
        return _children.ContainsKey(c);
    }

    public TrieNode Add(char c)
    {
        TrieNode child = new TrieNode();

        _children[c] = child;

        return child;
    }

    public void Remove(char c)
    {
        _children.Remove(c);
    }
}