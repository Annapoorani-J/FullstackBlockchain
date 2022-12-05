function special(x){
let y=x;
let result=1;
let sum=0
while (y > 0) {
    let remainder = y % 10;
    if(remainder!=0){
        for(let i=remainder;i>=1;i--)
            result=result*i;
    }
    sum += result;
    result=1
    y = parseInt(y / 10); 
}  
if(sum===x)
    console.log(`${x} is a special number `)
else
    console.log(`${x} is a not a special number `)
}
let num=145;
special(num)