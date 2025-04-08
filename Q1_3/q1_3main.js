/*好想樂園的門票一張400元，
優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，
試用「[比較運算子](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison)」
// 寫一程式，讓使用者自行輸入年齡，並判斷門票價錢。 */

import {isValidInteger} from "../common_modules/userInputConditionals.js";
import {calculateTicketPrice} from "./1_3module.js";

import readline from 'readline';
const read = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

function inputAgeGetTicketPrice(){
    return new Promise((resolve) => {
        read.question("請輸入年齡:", function(age){
            if (isValidInteger(age)) {
                const resultPrice = calculateTicketPrice(age);
                resolve (resultPrice);
                read.close();
            }
            else{
                console.log("請輸入正確的數字");
                read.close();
            }    
        });
    });
}
inputAgeGetTicketPrice().then ((resultPrice) => {console.log(resultPrice)});