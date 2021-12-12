let input = "K1KA5CB7";
let arr = [];
for (value of input){
    arr.push(value);
}
arr.sort();
let sum = 0;
let i = 0;
console.log(arr.charCodeAt([0]))
while(arr.charCodeAt([i]) < 'A'.charCodeAt([0])){
    sum += parseInt(arr[i]);
    console.log(sum);
    i++;
}

let trimedArr = [];

for(j = i ; j < arr.length; j++){
    trimedArr.push(arr[j]);
}

trimedArr.push(sum);

trimedArr += '';

console.log(trimedArr);