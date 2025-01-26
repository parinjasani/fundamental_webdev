// dynamic typing 

// let a=5;
// console.log(a);
// a='parin';
// console.log(a)


// object in js

// let circle={
//     radius:12,
//     daimeter:24,

//     area:function(){
//         console.log(3.14*this.radius*this.radius)
//     }
// }


// console.log(circle)
// circle.area()
// console.log(circle.radius) 


// factory function

// function createRectanngle(r,d){
//     return circle={
//         radius:r,
//         daimeter:d,
    
//         area:function(){
//             return 3.14*this.radius*this.radius
//         }
//     }
    
// }


// circleObj=createRectanngle(12,24)
// console.log(circleObj.area())
// circleObj2=createRectanngle(78,124);
// console.log(circleObj2.radius)

//constructot function -> pascalnotation ex NumberOfStudennt
// function CreateRectangle(){
//     this.radius=12;
//     this.daimeter=24;
//     this.area=function(){
//         console.log(3.34*this.radius*this.radius);
//     }
// }
// let obj=new CreateRectangle()

// dynamic nature of the object
// obj.color='yellow';
// console.log(obj)

// delete obj.color
// console.log(obj)

// constructor property
// obj.constructor;
// CreateRectangle.constructor;
//let,s see how js work internly

// let Cir=new Function(`

//     this.radius=12;
//     this.daimeter=24;
//     this.area=function(){
//         console.log(3.34*this.radius*this.radius);
//     }

//     `)
// objinte=new Cir();
// console.log(objinte.radius);


//how reference work
// let a={
//     value:12
// }
// let b=a;
// a.value++;
// console.log(a.value)
// console.log(b.value) 

//for-in loop

// let rectangle={
//     length:23,
//     width:45,
//     color:'black'
// }
// for(i in rectangle){
//     console.log(i,rectangle[i])
// }

// if('length' in rectangle){
//     console.log('present');
// }
// else{
//     console.log('absent');
// }

//object cloning

let rectangle={
    length:23,
    width:45,
    color:'black'
}
console.log(rectangle)
//1.itration
let b={}
for(i in rectangle)
{
    b[i]=rectangle[i]
}
console.log(b)
b.value=12;
//2.assign
let c=Object.assign({},rectangle,b)
console.log(c)

//3.Spread operator
let d={...rectangle,...b}
console.log(d)