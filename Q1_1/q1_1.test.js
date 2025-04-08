//const {isthereZero} = require('./stage1_1');//原先寫法//commonJS

import {isThereZero} from './1_1module.js';//ES6
const readline = require('readline');

jest.mock('readline', () => {
    return{
            createInterface: jest.fn().mockReturnValueOnce({
            question: jest.fn((question, callback) => {
            callback('0');
            }),
            close: jest.fn()
        })
    };
});

test('!0 is true', () =>{
    let a = !0;
    expect(a).toBeTruthy();
    })

test('input number of people and decide movie open or not', () => {
    
    let result1 = isThereZero(0);
    expect(result1).toBe("今日暫停播放電影");

    let result2 = isThereZero(2);
    expect(result2).toBe("照常電影播放");
})