import { Calculadora } from "../src/calc";

describe("Calculadora", () => {

    let calc;

    beforeEach(() => {
        calc = new Calculadora();
    })

    it('sum', () => {
        const a = 1;
        const b = 3;

        expect(calc.sum(a,b)).toEqual(4);

    })

})