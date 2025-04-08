//import readline from 'readline';

// const read=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout,
// });


//兩個整數分別除以3,顯示餘式相同/不同
export function dividedby3(integer01,integer02) {
    let divider = 3; //方便做修正
    let divideResult;
    if ((integer01 %= divider) == (integer02 %= divider)){
        return divideResult = ("餘式相同");
    }
    else{
        return divideResult = ("餘式不同");
    };
}


import {isValidInteger} from '../common_modules/userInputConditionals.js';
// import { log } from 'console';
//檢查輸入整數一是否為整數
function getAnswer(q) {
    return new Promise ((resolve, reject) => {
        read.question(q,  function(integer01){
            resolve(integer01);
        })
    })

};

//code view修改版
// export async function readLineInteger1() {
//     const str= "輸入整數一"
//     const answer = await getAnswer(str);

//     if (isValidInteger(answer)){
//         console.log('1')
//         return answer;
//     }
//     else{
//         console.log('not init')
//         return readLineInteger1(str);
        
//     }
// }
export function readLineInteger1() {
    return new Promise ((resolve, reject) => {
        read.question("輸入整數一:",  function(integer01){
            if (isValidInteger(integer01)){
                return resolve(integer01);
            }
            else{
                let isNotInteger = "不是整數";
                return reject(isNotInteger);//這部分回傳不太懂
                
            }
         
     })
    })
};


//檢查輸入整數二是否為整數
export function readLineInteger2() {
    return new Promise ((resolve, reject) => {
        read.question("輸入整數二:",  function(integer02){
            if (isValidInteger(integer02)){
                //read.close();
                return resolve(integer02);
            }
            else{
                let isNotInteger = "不是整數";
                //read.close();
                return reject(isNotInteger);
            }
     })
    })
};

export function test() {
    console.log("test")
}