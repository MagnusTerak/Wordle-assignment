export default function generateWord(selectedWords, wordLength, uniqueLetters) {
    let filteredWords = [];

    const getRandomWord = function(wordArray) {
        // Returnerar ett random ord ifrån parameterns array
        let randomword = wordArray[Math.floor(Math.random() * wordArray.length)];
        return randomword;
    };

    const uniqueString = function(string) {
        let origin = string.toLowerCase().split('');
        let unique = origin.filter(function (char, index) {
            return origin.indexOf(char) === index;
        });

        // Om värdena returnerar samma längd så är alla bokstäver i ordet unika
        return origin.length === unique.length;
    };

    for (let i = 0; i < selectedWords.length; i++) {
        if (wordLength) {
            if (selectedWords[i].length === wordLength) {
                if (uniqueLetters) {
                    // Ordet går igenom våran funktion för att kolla om ordet endast har unika bokstäver
                    let isUnique = uniqueString(selectedWords[i]);
                    
                    if (isUnique) {
                        filteredWords.push(selectedWords[i]);
                    } 
                } else {
                    filteredWords.push(selectedWords[i]);
                }
            } 
        }
    }

    return filteredWords.length === 0 
    // Returnerar false och loggar ett error meddelande ifall längden av wordArray är 0
    ? (console.error("Could not find any words matching your requested criteria! Please re-do, and make sure your criteria is possible!"), false) 
    // Annars returnera ett ord med våran getRandomWord funktion
    : getRandomWord(filteredWords);
}