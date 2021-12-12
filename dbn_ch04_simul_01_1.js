// // 조건 입력 받는 변수 선언 
// // 이동 계획을 1차원 배열로 입력받기.
// // n값 가지고 n차원 배열 선언
// // switch 문 가지고 각 입력 동작값 로직 작성 

// // 입력 받은 이동꼐획배열을 순회하면서 answer 값 switch 문 이용해서 증감하기 





let n = 5;

let plan = ['R', 'R', 'R', 'U', 'D', 'D'];



// let row = 1;
// let col = 1;
// console.log('시작' + row + ' ' + col);
// for (i of plan){
//     if((i === 'U') && (row > 0) && (row < n)){
//         col--;
//         console.log('U'+row + ' ' + col);
//     }
//     if((i === 'D') && (row > 0) && (row < n)){
//         col++;
//         console.log('D'+row + ' ' + col);
//     }
//     if((i === 'L') && (col > 0) && (col < n)){
//         col--;
//         console.log('L'+ row + ' ' + col);
//     }
//     if((i === 'R') && (col > 0) && (col < n)){
//         col++;
//         console.log('R'+ row + ' ' + col);
//     }


// }

// console.log('답' + ' ' +row + ' ' + col);

///위에는 내가 풀다 만 것.

// 나동빈 코드

let row, col = 1;

dx = [-1, 1, 0, 0];
dy = [0, 0, -1, 1];
move = ['L', 'R', 'U', 'D'];

for (p of plan) {
    for (i in move) {
        if (p === move[i]) {
            row += dx[i];
            col += dy[i];
        }

        if ((row < 1) || (col <1) || row >n || col > n) continue;
    }


}
console.log(row + ' ' +col);