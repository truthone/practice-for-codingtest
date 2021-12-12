let input = 'c2';
// 인풋값 문자와 숫자 쪼개서 row col 표시하기 

let row = input[1]-1;
let col = input.charCodeAt([0]) - 'a'.charCodeAt([0]) + 1-1;

console.log(`input 변환 : ${row} ${col}`);
let n = 8; // 몇배열

let x = [-1,1,-2,-2,-1,1,2,2];
let y = [2,2,1,-1,-2,-2,1,-1];

let answer = 0;

//일단 내가 푼 것.
// for (i in x1) {
//     if (((0 < row + x1[i]) && (row + x1[i] < n+1)) && (0 < col + y1[i] && col + y1[i] < n+1)) {
//        console.log()
//        answer++;
//        console.log(`반복: ${i}`);
//     }
    
// }

// 동빈나 코드 참고 후 
for (i in x){
    let dx = row + x[i];
    let dy = col + y[i];
    console.log(`${dx}, ${dy}`);
    if((0 <= dx && dx <= n) && (0 <= dy && dy <= n)){
        answer++;
        console.log(` ${i}번째 경우 `);
    }
    
    //확인하고 초기화 
    dx, dy = 0;
}

console.log(`답은 ${answer}`);