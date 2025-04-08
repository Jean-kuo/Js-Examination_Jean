import {isValidInteger} from './userInputConditionals.js';

test('input number is valid integer ', () => {
    let result1 = isValidInteger(5);
    expect(result1).toBeTruthy();

    let result2 = isValidInteger(-1);
    expect(result2).toBeFalsy();
    
    let result3 = isValidInteger('123abc');
    expect(result3).toBeFalsy();

    let result4 = isValidInteger('99%');
    expect(result4).toBeFalsy();

    let result5 = isValidInteger("");
    expect(result5).toBeFalsy();
});