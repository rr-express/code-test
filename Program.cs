// Assumptions
// 1. The grid array is not jagged.
// 2. The input only contains upper case letters.
// 3. The words in the grid go left to right and top to bottom, 
//    not right to left or bottom to top.
// 

WordSearchGameInput input = new WordSearchGameInput(5, 5);

input.AddChar('L', 0, 0);
input.AddChar('I', 0, 1);
input.AddChar('O', 0, 2);
input.AddChar('N', 0, 3);
input.AddChar('F', 0, 4);
input.AddChar('B', 1, 0);
input.AddChar('E', 1, 1);
input.AddChar('A', 1, 2);
input.AddChar('R', 1, 3);
input.AddChar('D', 1, 4);
input.AddChar('I', 2, 0);
input.AddChar('S', 2, 1);
input.AddChar('H', 2, 2);
input.AddChar('C', 2, 3);
input.AddChar('A', 2, 4);
input.AddChar('R', 3, 0);
input.AddChar('D', 3, 1);
input.AddChar('T', 3, 2);
input.AddChar('I', 3, 3);
input.AddChar('T', 3, 4);
input.AddChar('F', 4, 0);
input.AddChar('A', 4, 1);
input.AddChar('C', 4, 2);
input.AddChar('T', 4, 3);
input.AddChar('S', 4, 4);

input.AddWord("LION");
input.AddWord("BEAR");
input.AddWord("FISH");
input.AddWord("BIRD");
input.AddWord("CAT");
input.AddWord("DAT");
input.AddWord("FACT");

WordSearchGameDomain domain = new WordSearchGameDomain(input);
domain.Run();


/*
Trie trie = new Trie();
trie.Add("ant");
trie.Add("an");
trie.Add("book");
trie.Add("there");
trie.Add("answer");
trie.Add("by");
trie.Add("bye");
trie.Add("their");

Console.WriteLine(trie.Contains("ant"));

trie.Delete("ant");
//Console.WriteLine(trie.Delete("ant"));
Console.WriteLine(trie.Contains("ant"));
trie.Delete("an");
//Console.WriteLine(trie.Delete("an"));
Console.WriteLine(trie.Contains("an"));
trie.Delete("a");
//Console.WriteLine(trie.Delete("a"));
trie.Delete("by");
*/