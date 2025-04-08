/*好想電影院規定除非完全沒有客人買票，
否則就算只有一位顧客也照常播放電影。
讓使用者輸入客人的人數，並用「!」判斷人數，
不為零顯示「照常播放電影」。*/

const readline=require('readline');
const read = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});


read.question( "輸入今日到場人數:" , function (people) {
    const result = isThereZero(people);
    console.log(result);
    read.close();
});

//判斷是否為0
function isThereZero(people){
    let result;
    if( ! Number(people)){
        result = "今日暫停播放電影";}
    else{
        result = "照常電影播放";}
    return result;
}
