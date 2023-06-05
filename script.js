document.addEventListener("DOMContentLoaded", function() {
    const grid = document.getElementById("grid");
    const cells = Array.from(grid.getElementsByTagName("td"));
    const wordsList = document.getElementById("words");
    const words = Array.from(wordsList.getElementsByTagName("li"));
    const foundWords = new Set();

    cells.forEach(function(cell) {
        cell.addEventListener("click", selectLetter);
    });

    function selectLetter() {
        this.classList.toggle("selected");
        checkSelectedWord();
    }

    function checkSelectedWord() {
        let selectedLetters = Array.from(grid.getElementsByClassName("selected"));
        let selectedWord = "";
        selectedLetters.forEach(function(letter) {
            selectedWord += letter.textContent;
        });

        words.forEach(function(word) {
            if (selectedWord.toLowerCase() === word.textContent.toLowerCase().trim()) { 
                foundWords.add(word.textContent);
                word.classList.add("found");
                selectedLetters.forEach(function(letter) {
                    letter.classList.add("found");
                    letter.classList.remove("selected");
                });
                selectedLetters = [];
                checkGameComplete();
                return;
            }
        });
    }

    function checkGameComplete() {
        if (foundWords.size === words.length) {
            alert("Congratulations! You found all the words!");
        }
    }
});
