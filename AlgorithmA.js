export default function guessWord(wordGuessed, correctWord) {
    let returningWordArray = [];
    let countedLetters = {};

    // Sparar antalet bokstäver det ska vara för varje bokstav
    for (let letter of correctWord) {
        // Vi kollar även om värdet redan existerar som nummer annars använder vi oss utav 0
        countedLetters[letter] = (countedLetters[letter] || 0) + 1;
    }

    // Loopar igenom de gissade ordet och kollar ifall det matchar
    // Om bokstaven matchar så pushas det in som "correct" annars som "incorrect"
    for (let i = 0; i < wordGuessed.length; i++) {
        if (wordGuessed[i] === correctWord[i]) {
            returningWordArray[i] = {
                letter: wordGuessed[i],
                result: "correct"
            }

            // Sänker antalet av de redan räknade bokstäverna då vi har hittat en match
            countedLetters[wordGuessed[i]]--
        } else {
            returningWordArray[i] = {
                letter: wordGuessed[i],
                result: "incorrect"
            }
        }
    }

    // Här loopar vi igen igenom de gissade ordet
    for (let i = 0; i < wordGuessed.length; i++) {
        // Kollar så att bokstaven vi ska kolla på inte redan är korrekt
        if (returningWordArray[i].result !== "correct") {
            // Här kollar vi först så att bokstaven existerar i det korrekta ordet med våran "countedLetters" och kollar även ifall antalet av countedLetters är över 0
            if (countedLetters[wordGuessed[i]] && countedLetters[wordGuessed[i]] > 0 ) {
                // Om bokstaven stämmer in på kriteriet så ändrar vi värdet i arrayen till misplaced och sänker våran countedLetters
                returningWordArray[i].result = "misplaced";
                countedLetters[wordGuessed[i]]--
            }
        }
    }

    return returningWordArray;
}