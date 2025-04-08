
import {calculationSUM, calculationFormula} from './1_4module';
const readline = require('readline')

jest.mock('readline', () => {
    return{
            createInterface:jest.fn().mockReturnValueOnce({
            question: jest.fn((question, callback) => {
            callback('0');
            }),
            close: jest.fn()
        })
    };
});

describe('check calculation the sum is right', () => {
    test('calculationSUM', () => {
        expect(calculationSUM(0)).toBe(0);
        expect(calculationSUM(1)).toBe(1);
        expect(calculationSUM(8)).toBe(6);
    });
});

describe('check Formula structure is right', () => {
    test('calculationFormula 0 & 8', () => {
        const arrayX = calculationFormula(0);
        const arrayY = calculationFormula(8);
        let X = arrayX.join("");
        let Y = arrayY.join("");
        expect(X).toBe("0=");
        expect(Y).toBe("1+2-3+4-5+6-7+8=");

    })
})