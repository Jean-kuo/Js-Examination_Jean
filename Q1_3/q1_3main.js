/*好想樂園的門票一張400元，
優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，
試用「[比較運算子](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison)」
// 寫一程式，讓使用者自行輸入年齡，並判斷門票價錢。 */

const readline=require('readline');
const read = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let ticket = 400;
let price = ticket/2;

read.question("請輸入年齡:",function (age) {
    return new Promise((resolve) => {
        if ((Number(age)<=6)|(Number(age)>=65)){
            console.log("票價優惠"+price+"元")
        }
        else{
            console.log("票價為"+ticket+"元")
        };
        read.close();
    })
    
});
