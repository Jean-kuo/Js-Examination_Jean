let amusementParkTicket = 400;
let concessionTicket = amusementParkTicket/2;

export function calculateTicketPrice(age){
    let resultPrice;//宣告變數
    if ((Number(age) <= 6) || (Number(age) >= 65)){
        // resolve("票價優惠"+price+"元");
        //resultPrice = console.log(`票價優惠${price}元`);目標是把resultPrice返回給Promise,非給控制台輸出
        resultPrice = `您的資格票價優惠為${concessionTicket}元`
    }
    else{
        resultPrice = `一般票價為${amusementParkTicket}元`
    }
    return resultPrice;
}