/*使用者輸入兩個整數，將它們分別除以 3 ，
判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。*/

const readline=require('readline');
const read = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var q1 = read;
var q2 = read;

q1.question("整數一:",function (todo1) {
    var a=Number(todo1);
    
    q2.question("整數二:",function (todo2) {
        var b=Number(todo2);
        
        const result = dividedby3(a,b);
        console.log(result);     
        read.close();
        
    });
      
});
function dividedby3(a,b) {
    let divider = 3
    let result;
    if ((a%=divider)==(b%=3)){
        return result = ("餘式相同");
    }
    else{
        return result = ("餘式不同");
    };
}
module.exports = {dividedby3};

function dividedby3(a,b) {
    let divider = 3
    let result;
    if ((a%=divider)==(b%=3)){
        return result = ("餘式相同");
    }
    else{
        return result = ("餘式不同");
    };
}