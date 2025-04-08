/*寫一個遞迴函數 `function umleven(n)` 
來求算 `2*4 + 4*6 + 6*8...+(n-2)*n` 
(n最小為 4, 只會出現偶數)*/

const readline=require('readline');
const read = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

read.question("請輸入n值:",function(todo){
    var n=Number(todo);
    var sum=0;
    function umleven(n){
        if(n <= 3) {
            return 0
        };
        if(n % 2 == 0){
            sum=n*(n - 2);
        }
        return sum + umleven(n - 2);
    }
    var result=umleven(n);
    console.log(result);
    read.close();
});

//遞迴函數 注意加上終止條件
// function umleven(n){
//     if (n<=2){
//         return 0;
//     }
//     sum=n * (n - 2);
//     return sum + umleven(n - 2);
// }