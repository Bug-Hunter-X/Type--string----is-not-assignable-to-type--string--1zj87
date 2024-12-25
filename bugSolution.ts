function greeter(person: string): string {
  return `Hello, ${person}!`;
}

function greeterArray(person: string[]): string {
  return `Hello, ${person.join(' ')}!`;
}

let user = ["Jane", "Doe"];
console.log(greeterArray(user)); //Correct usage
console.log(greeter(user[0])); //Correct usage