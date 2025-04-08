
//判斷是否為0  //ES6
//export const isThereZero = (people) => {}

export function  isThereZero  (people)  {
    let result;
    if( ! Number(people)){
        result = "今日暫停播放電影";}
    else{
        result = "照常電影播放";}
    return result;
}

//module.exports = {isThereZero};//commonJS

//export default isThereZero;
//每個檔案只能有一個default