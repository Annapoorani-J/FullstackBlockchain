function armNum(x){
    let y=x;
    let sum=0
    while (y > 0) {
        let remainder = y % 10;
        sum += remainder ** 3;
        y = parseInt(y / 10); 
    }  
    if (sum == x) {
        console.log(`${x} is an Armstrong number`);
    }
    else {
        console.log(`${x} is not an Armstrong number.`);
    }
}
let num=100;
armNum(407)