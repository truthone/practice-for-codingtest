// 1. 입력 받은 짝수자릿수 숫자를 문자열로 반환하고, 문자열 반으로 나눠 
// 각각 배열 pre , 배열 suf 선언 & 할당하기
// 2. 각 배열 순회하면서 각 배열 합 구하기
// 3. if문 만들어서 럭키, 레디 배열합 조건돌려서 출력하기 


// 1
let input = 123402;
inputString = (input + '');

let preSum =0;
let sufSum = 0;


for (let i = 0; i < parseInt(inputString.length / 2); i++){
        preSum += parseInt(inputString[i]);
}


for (let i = parseInt(inputString.length / 2); i <inputString.length; i++){
    sufSum += parseInt(inputString[i]);
}

console.log(`preSum: ${preSum} sufSum: ${sufSum}`);

if(preSum === sufSum ){
    console.log("LUCKY");
}else{
    console.log("READY");
}