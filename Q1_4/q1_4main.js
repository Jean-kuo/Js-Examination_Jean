
/*輸入 n 印出 `1+2-3+4-5+6...n` 的算式與總和 */

const readline=require('readline');
const read = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

read.question("輸入n值:",function (todo) {
    const n = Number(todo)
    const sum = count(n);
    equation(n);
    
    console.log(sum);   
    read.close();
});

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
    
    return sum; 
}

//以下使用process.stdout.write直接輸出文字到控制台 不用考慮return ，列出算式用

function equation(n) {
    if (n !== 0){
        process.stdout.write('1');
        for (var j = 2; j < (n+1); j++){
            if (j%2 == 0){
                process.stdout.write("+"+j)
            }
            if(j%2 != 0){
                process.stdout.write("-"+j)
            }
        };
        process.stdout.write("=");
    }
    else{
        process.stdout.write("0=");
    }
    
}