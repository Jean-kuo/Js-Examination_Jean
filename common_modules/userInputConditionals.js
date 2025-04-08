
export function isValidInteger (keyWord){
    const regex = /^\d+$/;
    //console.log(regex.test(keyWord));
    return regex.test(keyWord);
}




// const readline=require('readline');
// const read=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout,
// });

// read.question("輸入:",function (todo) {
    
//     read.close();
// });