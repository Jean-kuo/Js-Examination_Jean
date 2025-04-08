//計算用
export function calculationSUM(valueN){
    let sum1 = 0;
    let sum2 = 0;
    let resultSum = 0;
    if (valueN !== 0){
        for (var letterI = 1; letterI < (valueN+1); letterI++){
            if(letterI % 2 == 0){
                sum1 = sum1+letterI;
            }
            else if(letterI % 2 != 0){
                sum2 = sum2-letterI;
            }
        };
        resultSum = sum1+sum2+2;
    }
    else{
        resultSum = 0;
    }
    
    return resultSum; 
}

//列出算式用
export function calculationFormula(valueN){
    if (valueN !== 0){
        let arrayFormula = ["1"];
        for (var letterK = 2; letterK < (valueN+1); letterK++){
            if (letterK % 2 == 0){
                arrayFormula.push("+"+letterK);
                }
            else if (letterK % 2 !== 0){
                arrayFormula.push("-"+letterK);
                }
            };
        arrayFormula.push("=");
        return arrayFormula;
    }
    else{
        let arrayValue0 = ["0="];
        return arrayValue0;
        };
}


