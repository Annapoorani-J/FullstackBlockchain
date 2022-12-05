//Sum of multiples of 3 and 5 under 1000
let result=0
for (let i = 0; i < 1000; i++)
{
    if (i % 3 === 0 || i % 5 === 0)
    {
        result += i
    }
}
console.log(result);