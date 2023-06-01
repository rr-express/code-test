class Coord
{
    private Dictionary<int, HashSet<int>> coordDict = new Dictionary<int, HashSet<int>>();

    public void Add(int rowIndex, int columnIndex)
    {
        if (!coordDict.ContainsKey(rowIndex))
            coordDict.Add(rowIndex, new HashSet<int>());

        coordDict[rowIndex].Add(columnIndex);
    }

    public bool Contains(int rowIndex, int columnIndex)
    {
        if (!coordDict.ContainsKey(rowIndex))
            return false;

        return coordDict[rowIndex].Contains(columnIndex);
    }
}