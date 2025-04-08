
import {dividedby3} from './1_2module.js';
const readline = require('readline');//預設匯出
//const {dividedby3} = require('./stage1_2')//具名匯出


jest.mock('readline', () => {
    return{
            createInterface:jest.fn().mockReturnValueOnce({
            question: jest.fn((question, callback) => {
            callback('12','15');
            }),
            close: jest.fn()
        })
    };
});

test(' two integer divided by 3 and their remainder are the same or not', () => {
    let result1 = dividedby3(12, 15);
    expect(result1).toBe("餘式相同");

    let result2 = dividedby3(13, 18);
    expect(result2).toBe("餘式不同");
    
    let result3 = dividedby3(21, 11);
    expect(result3).toBe("餘式不同");
});