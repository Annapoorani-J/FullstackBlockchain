let num=4
let number=1
let string=""
for( let i=1;i<=num;i++){
    for (let j=1;j<=i;j++){
        string=string+number+" ";
        number++;
    }
    string += "\n";   
}
console.log(string)