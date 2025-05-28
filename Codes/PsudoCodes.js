console.log(1 + '2');  //12 -> when a number and a string are combined with +, the number is converted to a string.

console.log('6' - 1);  //5 ->  when you use the '-' operator with string and number, JavaScript convert the string to a number automatically which is called type coercion

console.log(1 === '1');  //False  -> '1' is a integer and '1' is a string. Strict equality operator(===) check both the type and the value.

console.log(null == undefined);  //True -> The answer is true because JavaScript treats them equal because of '==' loose equality operator.

//add a property to an object
const obj = { name: 'Riya' };
obj.age = 21;
console.log(obj);

//delete a property from an object
const obj2 = { name: 'Riya', age: 21 , rank: 1};
delete obj2.age;
console.log(obj2);


//merge 2 arrays
arr1.concat(arr2);


//conversion of Celsius to and from Fahrenheit
Fahrenheit = (Celsius×9/5)+32
Celsius = (Farhrenheit-32)*5/9


//Union of 2 arrays
function arrayUnion(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
console.log(arrayUnion([1, 2, 3], [2, 3, 4]));   //[1, 2, 3, 4]

//Intersection of 2 arrays
function arrayIntersection(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(value => set2.has(value));
}

console.log(arrayIntersection([5, 6, 7], [6, 7,8 ]));   //[ 6, 7 ]