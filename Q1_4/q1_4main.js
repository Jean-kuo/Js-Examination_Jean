
/*輸入 n 印出 `1+2-3+4-5+6...n` 的算式與總和 */

const readline=require('readline');
const read = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});


read.question("輸入n值:",function (todo) {
    const n = Number(todo)
    
    //以下count計算用
    const sum = count(n);
    //以下列出算式用
    const arrayX = equation2(n);
    
    console.log(arrayX.join("")+sum);
    //result+sum 被誤判定成運算而非字串串聯,所以結果為NaN
    //result出現undefined, equation沒有回返值給result
    
    read.close();
});
module.exports = {count, equation2};

//count計算用
function count(n){
    let sum1 = 0;
    let sum2 = 0;
    let sum = 0;
    if (n !== 0){
        for (var i=1; i < (n+1); i++){
            if(i%2 == 0){
                sum1 = sum1+i
            }
            if(i%2 != 0){
                sum2 = sum2-i
            }
        };
        sum = sum1+sum2+2;
    }
    else{
        sum = 0;
    }
    
    return sum; //不必加sum= 運算結果已經會自己返回給sum
}



//方案2:列入陣列再用join輸出 有回傳值可以測試
function equation2(n){
    if (n !== 0){
        let array1 = ["1"];
        for (var k = 2; k < (n+1); k++){
            if (k % 2 == 0){
                array1.push("+"+k);
                }
            if (k % 2 !== 0){
                array1.push("-"+k);
                }
            };
        array1.push("=");
        return array1;
    }
    else{
        let array2 = ["0="];
        return array2;
        };
}