//判斷輸入n值為n>=4 且 n為偶數  
export function isValueNaEVENnumber(valueN){
    //條件運算值簡潔寫法
    const resultValueN = (valueN >= 4) && (valueN % 2 == 0) ? true : false;
    return resultValueN;
}

//遞迴函數
export function umleven(valueNisOK){
    if (valueNisOK<=2){
        return 0;
    }
    let formulaSUM = valueNisOK * (valueNisOK - 2);
    return formulaSUM + umleven(valueNisOK - 2);
}