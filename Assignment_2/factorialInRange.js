let i, j, flag,result=1;
function primeFact(a,b){
    for (i = a; i <= b; i++) {
        if (i == 1 || i == 0)
            continue;
        flag = 1;
        for (j = 2; j <= i/2 ; ++j) {
            if (i % j == 0) {
                flag = 0;
                break;
            }
        }
        if (flag == 1){
            for(let x=i;x>=1;x--){               
                result=result*x }        
            console.log(`The factorial of the prime number ${i} is ${result}`)
            result=1
        }
    }
}
primeFact(1,100)
