const countVowels = (str) => (str.match(/[aeiou]/gi) || []).length

const longestWord = (string) => {
    let str = `${string.replace(/[^a-zA-Z ]/g, "")}`.split(" ");
    var longest = 0;
    var word = null;
    str.forEach(function (testWord) {
        if (longest < testWord.length) {
            longest = testWord.length;
            word = testWord;
        }
        else if (longest == testWord.length) {
            if (countVowels(word) <= countVowels(testWord)) {
                word = testWord
            }
        }
    });
    return word;
}

const data = `“Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)`

console.log(longestWord(data));