function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // Correct
let result2 = subtract(10, 5); // Correct

//Solution: Explicit type annotation
function operate(a: number, b: number, operation: 'add' | 'subtract'): number {
  let result: number;
  if (operation === 'add') {
    result = add(a, b);
  } else {
    result = subtract(a, b);
  }
  return result;
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

//Solution: Optional chaining (?.) and nullish coalescing (??)
function greet2(person: Person | null | undefined): string {
    return `Hello, ${person?.name ?? 'there'}! You are ${person?.age ?? 0} years old.`
}

let person3: Person | null | undefined = { age: 30, name: 'John' };
let person4: Person | null | undefined = null;
let person5: Person | null | undefined = undefined;
console.log(greet2(person3)); //Correct
console.log(greet2(person4));//Correct
console.log(greet2(person5));//Correct