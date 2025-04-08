/*好想電影院規定除非完全沒有客人買票，
否則就算只有一位顧客也照常播放電影。
讓使用者輸入客人的人數，並用「!」判斷人數，
不為零顯示「照常播放電影」。*/

//非邏輯運算符號"!"
//使用者輸入值視為字串,字串視為truthy值
//!0=True
//const readline=require('readline');屬node.js commonJS寫法

import {isThereZero} from "./1_1module.js";
import {isValidInteger} from "../common_modules/userInputConditionals.js";

import  readline from 'readline';
const read = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

read.question( "輸入今日到場人數:" , function (movieAttendees) {
    if (isValidInteger (movieAttendees)) {
        if (Number(movieAttendees) > 300){
            console.log("人數超過電影院容納量");
            read.close();
        }
        else{
            const result = isThereZero(movieAttendees);
            console.log(result);
            read.close();
        }
    }
    else{
        console.log("請輸入正確數字");
        read.close();
    }
});
