/*寫一個遞迴函數 `function umleven(n)` 
來求算 `2*4 + 4*6 + 6*8...+(n-2)*n` 
(n最小為 4, 只會出現偶數)*/

const readline=require('readline');
const read = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});


function getValueNAndCheck(){
    return new Promise ((resolve, reject) => {
        read.question("請輸入偶數且最小為4的n值:", function(todo){
            let n = Number(todo);
            //console.log("輸入的"+n)
            if (ValueN(n)){
                //console.log("回傳的"+n)
                resolve(n);
            }
            else{
                //console.log("錯誤的"+n)
                const m = "輸入n值有誤";
                reject(m);
            }
            //read.close();
        });
    })
}
getValueNAndCheck()
.then((n) => {
    const sum = umleven(n);
    console.log("求算總和為:"+sum);
    //read.close();
})
.catch((m) => {
    console.log(m);
    //read.close();
})
.finally(() => {
    read.close();
})

module.exports = {ValueN, getValueNAndCheck, umleven};

//判斷輸入n值為n>=4 且 n為偶數  
function ValueN(n){
    // if ((n >= 4) && (n % 2 == 0)){
    //     return true;
    // }
    // else{
    //     return false;
    // }

    const result = (n >= 4) && (n % 2 == 0) ? true : false;
    return result;
}
