const {ValueN, umleven} = require('./stage1_5')

const readline = require('readline')


describe('check getValueN function', () => {
    test('getValueN callback resolve or reject', async() => {
        const a = await jest.mock('readline', () => {
            return{
                    createInterface:jest.fn().mockReturnValueOnce({
                    question: jest.fn((question, callback) => {
                    callback('5');
                    }),
                    close: jest.fn()
                })
            };
        });
        const result = getValueN(a);
        expect(result).resolves.toBe(6);
        //jest.spyOn(readline, 'createInterface').mockReturnValue(4);
        // const result = getValueN(4);
        // expect(result).resolves.toBe(4)
        
    });
})