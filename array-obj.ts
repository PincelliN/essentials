let hobbies = ["Sport", "Cooking"];

/*
Errors 
hobbies.push(10);
*/

let users: (string | number)[];

users = [1, "Max"];
users = [5, 1];
users = ["Nic", "Max"];

//Generic Type
let superUsers: Array<string | number>;

//Tupla

//is a type with define lenght and type

// this is not a tupla
let possibleResult: number[];

possibleResult = [1, -1];
possibleResult = [1, 2, 3, 4];

//this is a tupla

let possibleResultTupla: [number, number];

possibleResultTupla = [1, -1];
// possibleResultTupla = [1,2,3] Error possibleResultTupla lenght is 2
