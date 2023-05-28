// Assumptions
// 1. The grid array is not jagged.
// 2. The input only contains upper case letters.
// 3. The words in the grid go left to right and top to bottom, 
//    not right to left or bottom to top.
// 
// Example input:
// LION
// BEAR
// FISH
// BIRD
// CAT
// DAT
// FACT

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

Console.WriteLine("--- WORD SEARCH GAME ---");
Console.WriteLine("Rule: enter the word you want to search (letters only)");
Console.WriteLine("      enter # to finish entering words");

string? str = "#";

do
{
    Console.WriteLine("Enter the word: ");
    str = Console.ReadLine();

    if (string.IsNullOrEmpty(str) || str.Contains("#"))
        break;

    input.AddWord(str.ToUpper());
}
while (!str.Contains("#"));

Console.WriteLine("---------------------------");
Console.WriteLine();
Console.WriteLine("The words you entered are: ");
Console.WriteLine(input.GetWordString());
Console.WriteLine();

WordSearchGameDomain domain = new WordSearchGameDomain(input);
domain.Run();

Console.ReadKey();