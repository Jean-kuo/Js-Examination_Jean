
import {isValueNaEVENnumber, umleven} from './1_5module';
const readline = require('readline')

jest.mock('readline', () => {
    return{
            createInterface:jest.fn().mockReturnValueOnce({
            question: jest.fn((question, callback) => {
            callback('5');
            }),
            close: jest.fn()
        })
    };
});

test('ValueN is EVEN number', () =>{
    expect(isValueNaEVENnumber(4)).toBeTruthy();
    expect(isValueNaEVENnumber(2)).toBeFalsy();
    expect(isValueNaEVENnumber(7)).toBeFalsy();

});
test('umleven', () => {
    let sum = umleven(8);
    expect(sum).toBe(80);
});