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
let emp = new Employee();
emp.getemployee();
Employee.display();
console.log(emp.name);

