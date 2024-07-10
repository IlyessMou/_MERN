//Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // Output: 'Tesla'
console.log(otherRandomCar) // Output: 'Mercedes'
/**********************************************/
//Problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//console.log(name); // Output: ReferenceError: name is not defined (Error) (because it's in the scope of the element employee only )
console.log(otherName); // Output: 'Elon'
/**********************************************/
//Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
console.log(password); // Output: '12345'
console.log(hashedPassword); // Output: undefined (since there's no password in person it's like we basically added the attribute password to it but we didn't assign anything to it which explains the undefined)
/**********************************************/
//Problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
console.log(first == second); // Output: false (2 != 5)
console.log(first == third); // Output: true (2 == 2)
/**********************************************/
//Problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
console.log(key); // Output: 'value'
console.log(secondKey); // Output: [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // Output: 1
console.log(willThisWork); // Output: 5