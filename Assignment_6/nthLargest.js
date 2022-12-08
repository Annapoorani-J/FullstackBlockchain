function find_largest(arr,val){
    let x=[...new Set(arr)];
    x.sort((a,b) => a-b);
    console.log(x[val+1]); 
}	
console.log(find_largest([ 3,45,6,7,23,5,7,8], 3));

