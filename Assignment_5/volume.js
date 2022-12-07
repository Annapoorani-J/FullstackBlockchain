const pi = 3.14159
class Cylinder{ 
    constructor(radius,height){
        this.radius=radius;
        this.height=height;
    }
    getVolume(){
        let volume=pi*this.radius*this.radius*this.height;
        console.log(volume.toFixed(4))
    }
}
class Sphere{ 
    constructor(radius){
        this.radius=radius;
    }
    getVolume(){
        let volume=4/3*(pi*this.radius*this.radius*this.radius);
        console.log(volume.toFixed(4))
    }
}
class Cone{ 
    constructor(radius,height){
        this.radius=radius;
        this.height=height;
    }
    getVolume(){
        let volume=pi*this.radius*this.radius*(this.height/3);
        console.log(volume.toFixed(4))
    }
}
let c1=new Cylinder(5,4);
let s1=new Sphere(3);
let c2=new Cone(3,4);
c1.getVolume();
s1.getVolume();
c2.getVolume();