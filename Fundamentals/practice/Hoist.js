/********************************************************************* */
//1
console.log(hello);                                   
var hello = 'world';
// AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello); //logs undefined
// hello = 'world';
/********************************************************************* */
//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// AFTER HOISTING BY THE INTERPRETER
// var needle;
// function test() {
//     var needle;
//     needle = 'magnet';
//     console.log(needle);
// }
// needle = 'haystack';
// test(); //logs magnet
/********************************************************************* */
//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// AFTER HOISTING BY THE INTERPRETER
// var brendan;
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// brendan = 'super cool';
// console.log(brendan); //logs 'super cool'
/********************************************************************* */
//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// AFTER HOISTING BY THE INTERPRETER
// var food;
// function eat() {
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';
// }
// food = 'chicken';
// console.log(food); //logs chicken
// eat(); //logs half-chicken
/********************************************************************* */
//5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// AFTER HOISTING BY THE INTERPRETER
// var mean;
// console.log(food); // undefined
// mean = function() {
//     var food;
//     food = "chicken";
//     console.log(food); 
//     food = "fish";
//     console.log(food); 
// };
// console.log(food); // undefined
// mean(); //mean is not a function
/********************************************************************* */
//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// AFTER HOISTING BY THE INTERPRETER
// var genre;
// console.log(genre); //logs undefined
// function rewind() {
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// genre = "disco";
// rewind(); //logs "rock" then "r&b"
// console.log(genre); //logs "disco"
/********************************************************************* */
//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// AFTER HOISTING BY THE INTERPRETER
// dojo = "san jose";
// console.log(dojo); //logs "san jose"
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// learn(); //logs "seattle" then "burbank"
// console.log(dojo); //logs "san jose"
/********************************************************************* */
//8 - Bonus ES6: const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// AFTER HOISTING BY THE INTERPRETER
// function makeDojo(name, students) {
//     const dojo = {};
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     } else if (dojo.students <= 0) {
//         dojo = "closed for now";
//     }
//     dojo.name = name;
//     dojo.students = students;
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65)); //logs { name: 'Chicago', students: 65, hiring: true }
// console.log(makeDojo("Berkeley", 0)); //logs Error - Assignment to constant variable
