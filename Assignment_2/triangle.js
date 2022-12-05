function check(s1,s2,s3){
    if(s1===s2 && s2===s3)
        console.log("Equilateral Triangle")
        
    else if (s1 == s2 || s2 == s3 || s1 == s3)
        console.log("Isosceles Triangle")

    else
        console.log("Scalene Triangle");
}

    let x = 21, y = 2, z = 23;
    check(x, y, z)