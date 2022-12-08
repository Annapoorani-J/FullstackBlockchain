class Rectangle{
    constructor(l,b){
        this.l=l;
        this.b=b;
    }
    area(){
        let a=this.l*this.b;
        return a
    }
}
class Square extends Rectangle{
    constructor(s){
        super(s,s);
    }  
}
let s1=new Square(4);
console.log(s1.area());
let r1=new Rectangle(4,5);
console.log(r1.area());
