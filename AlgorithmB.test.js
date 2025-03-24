import {describe, expect, it} from '@jest/globals';
import generateWord from './AlgorithmB';

/*
    Användaren skickar en array med ord, längd på önskat ord och en boolean om det krävs att ordet endast har unika bokstäver.

    Testet täcker följande: 
        Ett random ord av användarens inskickade array returnerar 
        Ordet returneras bara när längd kriteriet uppfylls
        Ordet returneras bara när unika bokstäver kravet uppfylls
        Felhantering med retunering av false & en console.error med felmeddelande

    Testet ska returnera false eller ordet som spelet har valt ut med hjälp av kriterierna.

*/

describe("generateWord function", () => {
    it("Tests if the returned value is one of the inputed strings (all matches the criteria)", () => {
        const result = generateWord(["DETTA", "BORDE", "FUNKA"], 5, false);

        expect(["DETTA", "BORDE", "FUNKA"]).toContain(result);
    });

    it("Tests to only return the value that has the matched length of the criteria", () => {
        const result = generateWord(["ORD", "BORDE", "FUNKA"], 3, false);

        expect(result).toBe("ORD");
    });

    it("Tests to only return the value that has unique letters", () => {
        const result = generateWord(["HALLÅ", "HJÄLP", "ÄPPLE"], 5, true);

        expect(result).toBe("HJÄLP");
    });

    it("Tests to return false if length criteria is not matched", () => {
        const result = generateWord(["HALLÅ", "HJÄLP", "ÄPPLE"], 3, false);

        expect(result).toBe(false);
    });

    it("Tests to return false if no unique letters are found", () => {
        const result = generateWord(["HALLÅ", "GÄLLA", "ÄPPLE"], 5, true);

        expect(result).toBe(false);
    });
})