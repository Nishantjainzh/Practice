// Add value of whole digit
const val = 88888;
const breakString = Array.from(String(val));
console.log(breakString);
const makeNumber = breakString.map(x => Number(x));
console.log(makeNumber);
const addall = makeNumber.reduce((a, b)=> a +b);
console.log(addall);

// Add all items of array with for loop
const arrVal = [ 9 , 9, 9, 3];
let result = 0
for(let i = 0; i < arrVal.length; i++){
    result = result + arrVal[i]
}

console.log(result);

// Add value with for loop
const data =  444444;
const bString = Array.from(String(data));
const applyMap = bString.map(elm => Number(elm));
var total = 0;
for( i = 0; i < applyMap.length; i++){
    total = total + applyMap[i];
}
console.log(total);

// How to make class and call methods
class Employee{
    name= "Birla soft";
    constructor(){
        console.log('this is constructor ' + this.name);
    }
    getemployee(){
        console.log('this is employee function');
    }
    static display(){
        console.log('display method');
    }
}
let empp = new Employee();
emp.getemployee();
Employee.display();
console.log(empp.name);

const arr = [1,29, 2, 3,46, 5, 6, 7];

// includes method
const include = arr.includes(4)
console.log('includes method',include);

// filter the condition
const filter = arr.find(x=> x === 2)
console.log('filter the condition',filter);

// map function is used for transform the array and it will be apply on each element of the array
const map = arr.map(num => num * 2 )
console.log('Map function ', map); 

// reduce method
const reduce = arr.reduce((x, y) => x + y);
console.log('reduce value ', reduce);

// some method for check the condition
const some = arr.some(x => x > 5);
console.log('some method ', some);

// every method
const every = arr.every(x => x < 59);
console.log('Every ', every);

// sort method will sort by default in ascending order
const Dsort = arr.sort((a, b)=> a>b? -1:1 );
console.log('Descending ',Dsort);

const Asort = arr.sort((a,b) => a > b? 1: -1);
console.log('Aescending ',Asort);

// array from method - it convert the string in an array
const afrom = [
    'n', 'i', 's', 'h',
    'a', 'n', 't', ' ',
    'j', 'a', 'i', 'n'
  ]
const resultData = Array.from(afrom);
console.log(resultData);


Array.prototype.ucase = function(){
    for(let i=0; i< this.length; i++){
        this[i] = this[i].toUpperCase();
    }
}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.ucase();
console.log(fruits);

// join method
const starray = 'lenovo laptop';
const resul = Array.from(starray);

console.log(resul);
console.log(resul.join(' * '));
console.log(fruits.toString());

const a = function(message){
    console.log(message + this.name);
}

const obj = { name:"nishant"}
const valu = a.bind(obj, 'leno')
valu()

var emp = { name: "nishant", localtion: "delhi"}
var employee = emp
//console.log(employee);
employee.name = 'rite';
console.log(emp);
console.log(employee);




