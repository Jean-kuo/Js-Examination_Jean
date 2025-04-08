/*使用者輸入兩個整數，將它們分別除以 3 ，
判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。*/

//重點糾錯:ab全域變數宣告,function執行順序,a=Number()寫法注意

import {dividedby3} from "./1_2module.js"
import {isValidInteger} from "../common_modules/userInputConditionals.js";
import readline from 'readline';

const read=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

var q1=read;
var q2=read;

console.log("請輸入兩個整數");

    q1.question("整數一:",function (integer01) {
        if (isValidInteger(integer01)){

            var integerA=Number(integer01);

            q2.question("整數二:",function (integer02) {

                if (isValidInteger(integer02)){
                    var integerB = Number(integer02);
                    const dividedResult = dividedby3(integerA, integerB);
                    console.log(dividedResult);    
                    read.close();
                }
                else{
                    console.log("整數二請輸入數字!");
                    read.close();
                }
            })
        
        }
        else{
            console.log("整數一請輸入數字!");
            read.close();
        }
    })