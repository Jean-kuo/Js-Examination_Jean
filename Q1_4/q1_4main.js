
/*輸入 n 印出 `1+2-3+4-5+6...n` 的算式與總和 */

import {calculationSUM, calculationFormula} from "./1_4module.js";
import {isValidInteger} from "../common_modules/userInputConditionals.js";

import readline from'readline';
const read=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

read.question("輸入n值:",function (inputN) {
    if (isValidInteger(inputN)) {
        const valueN = Number(inputN);
        
        //以下計算用
        const sumFormula = calculationSUM(valueN);
        //以下列出算式用
        const arrayFormula = calculationFormula(valueN);
        
        console.log(arrayFormula.join("")+sumFormula);
        read.close();
    }
    else{
        console.log("請輸入正確數字!");
        read.close();
    }
    
});

//用process.stdout.write做法因無回傳值,測試不好測;改成 列入陣列再用join輸出，有回傳值可以測試