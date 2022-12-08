//insert dashes between two even numbers
function computeDash(n1){
    let x=n1.toString();
    var result = [x[0]];
    let y=x.length;
    for(let i=1;i<y;i++){
        if((x[i-1]%2 === 0)&&(x[i]%2 === 0))
            {
            result.push('-', x[i]);
            }
        else
            {
            result.push(x[i]);
            }
            
    }
    console.log(result.join(''));
}
computeDash(`025468`);