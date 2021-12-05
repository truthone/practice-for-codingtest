//동빈나 코테책 실전문제 - 그리디 - 문자열뒤집기
(function main() {
    s ='11001100110011000001';
        teamOne = 0;
        teamZero = 0;

        for (let i = 0 ; i < s.length; i++){

            if((s[i] !== s[i+1]) && s[i] == 1){
                teamOne++;
            }
            if((s[i] !== s[i+1]) && s[i] == 0){
                teamZero++;
            }
        }
    
    // 두 팀 중 최소 수 구하기
    let answer = Math.min(teamOne, teamZero); 
    
    console.log('answer' + answer);
    console.log('teamOne:' + teamOne);
    console.log('teamZero:' + teamZero);
 
}());