function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // Correct
let result2 = subtract(10, 5); // Correct

// Uncommon error: Type inference issue in conditional type with string literal types
function operate(a: number, b: number, operation: 'add' | 'subtract'): number {
  if (operation === 'add') {
    return add(a, b);
  } else {
    return subtract(a, b);
  }
}

let result3 = operate(7, 2, 'add'); //Correct
let result4 = operate(7, 2, 'subtract');//Correct

//Another case
interface Person {
    age: number;
    name: string;
}

function greet(person: Person | null): string {
    if(person === null){
        return "Hello there"
    }else{
        return `Hello, ${person.name}! You are ${person.age} years old.`
    }
}

let person1: Person | null = { age: 30, name: 'John' };
let person2: Person | null = null;

console.log(greet(person1)); //Correct
console.log(greet(person2));//Correct

//Error prone condition
function greet2(person: Person | null | undefined): string {
    if(person === undefined){
        return "Hello there"
    }else if(person === null){
        return "Hello there"
    }else{
        return `Hello, ${person.name}! You are ${person.age} years old.`
    }
}

let person3: Person | null | undefined = { age: 30, name: 'John' };
let person4: Person | null | undefined = null;
let person5: Person | null | undefined = undefined;
console.log(greet2(person3)); //Correct
console.log(greet2(person4));//Correct
console.log(greet2(person5));//Correct