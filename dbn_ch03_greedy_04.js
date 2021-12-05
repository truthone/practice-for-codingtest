//동빈나 책 이것이 코딩테스트다 _ 주요개념_ch03 그리디_ 4번문제_1일 될 때까지
(function main() {
    n = 25;
    k = 5; 
    countFirstStep = 0;
    countSecondStep = 0;
    
    if((n % k) == 0){
        
        while(n != 1){
            console.log(n)
            n = parseInt(n / k);
            ++countFirstStep;
        }
    }else{
        
          countSecondStep = n % k;
          n -= k;
        console.log(n);
        while(n != 0){
            n = parseInt(n / k);
            countFirstStep++;
        }
        
    }
    
    answer = (countFirstStep+countSecondStep);
    
    console.log('answer' + answer);
 
}());