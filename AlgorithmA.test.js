import {describe, expect, it} from '@jest/globals';
import guessWord from './AlgorithmA';

/*
    Två ord jämförs med varandra ena är gissningen spelaren gör och det andra är det korrekta ordet som används.

    Testen täcker följande:
        orden är lika med varandra
        orden är inte lika med varandra
        om det finns bokstäver i orden som är rätt men felplacerade

    funktionen ska svara med en array där i samma order som det har blivit skrivet.
    Man får som svar vilken bokstav och vilket resultat bokstaven gav.
    Exempel:
    [
        {
            letter: "H",
            result: "correct"
        },
        {
            letter: "A",
            result: "incorrect"
        },
        {
            letter: "L",
            result: "misplaced"
        }
    ]

*/

describe("guessWord function", () => {
    it("Tests if the word is correct guessed", () => {
        const result = guessWord("HALLÅ", "HALLÅ");

        expect(result).toEqual([
            {
                letter: "H",
                result: "correct"
            },
            {
                letter: "A",
                result: "correct"
            },
            {
                letter: "L",
                result: "correct"
            },
            {
                letter: "L",
                result: "correct"
            },
            {
                letter: "Å",
                result: "correct"
            }
        ])
    });

    it("Tests if word is completely wrong", () => {
        const result = guessWord("ÄPPLE", "YTTRA");

        expect(result).toEqual([
            {
                letter: "Ä",
                result: "incorrect"
            },
            {
                letter: "P",
                result: "incorrect"
            },
            {
                letter: "P",
                result: "incorrect"
            },
            {
                letter: "L",
                result: "incorrect"
            },
            {
                letter: "E",
                result: "incorrect"
            }
        ])
    });

    it("Tests if there is 2 of the same letters and 1 is correct and 1 incorrect (not being showed as misplaced because it has already been found as correct)", () => {
        const result = guessWord("HALLÅ", "CYKLA");

        expect(result).toEqual([
            {
                letter: "H",
                result: "incorrect"
            },
            {
                letter: "A",
                result: "misplaced"
            },
            {
                letter: "L",
                result: "incorrect"
            },
            {
                letter: "L",
                result: "correct"
            },
            {
                letter: "Å",
                result: "incorrect"
            }
        ])
    })
})