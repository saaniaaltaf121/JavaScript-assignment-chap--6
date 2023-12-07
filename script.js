// Practice exercise 6.1

 function add(a , b){
    return a + b;

 }
 let value1 = 2;
 let value2 = 6;
 console.log(add(value1 , value2))
 console.log(add(2 , 6))

//  Practice exercise 6.2
const adj = ["super", "wonderful", "bad", "angry", "careful"];
function myFun() {
 const question = prompt("What is your name?");
 const nameAdj = Math.floor(Math.random() * adj.length);
 alert(adj[nameAdj] + " " + question );
console.log(adj[nameAdj] + " " + question );

 

}
myFun()
// Practice exercise 6.3

const val1 = 10;
const val2 = 5;
let operat = "-";
function cal(a, b, op) {
 if (op == "-"){
 console.log(a - b);
 } else {
 console.log(a + b);
 }
}
cal(val1, val2, operat);
// Practice exercise 6.4
const array = [];
for(x = 0; x < 10; x++){
let valuex= 5 * x;
let valuey= x * x;
let res= cal(valuex,valuey,"+")
array.push(res);



}
console.log(array)
function cal(a, b, op) {
    if (op == "-") {
    return a - b;
    } else {
    return a + b;
    }
   }
//    Practice exercise 6.5
let a = 1000;
(function () {
    let a = 100
    console.log(a);
})();
let result =  (function () {
    let a = "john";
    return a;
   })();
   console.log(result);
console.log(a);
(function(a){
    console.log(`my name is ${a}`)
})("john");

// Practice exercise 6.6
function calFactorial(argu){
    console.log(argu)
    if(argu==0){
        return 1;
    }
    else{ 
        return argu * calFactorial(--argu);
    }
}
console.log(calFactorial(6));
// Practice exercise 6.7
const value = 10;
function loop1(x){
    console.log(x)
    if (x < 1){
        return
    }
    return loop1(x-1)
}
function loop2(x){
    console.log(x)
    if (x > 0){
        x--;
        return loop2(x);
    }
    
    return 

}
loop2(value);
// Practice exercise 6.8

const pract = function count(x){
    console.log(x)
}
pract('hello 1');
function test1(x){
 console.log(x);
}
test1("hello 2");
// Chapter projects
const main = function counter(i) {
    console.log(i);
    if (i < 10) {
    return counter(i + 1);
    }
    return;
   }
   main(0);


//    Set timeout order
let one= ()=> console.log('one');
let two= ()=> console.log('two');
let three= ()=> {
    console.log('three');
    one ();
    two();
}
const four = () =>{
    console.log('four');
    setTimeout(one,0);
    three();
   }
   four();