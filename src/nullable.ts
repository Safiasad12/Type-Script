
// In TypeScript, a nullable type refers to a type that allows a variable to either hold a specific value or be null (or sometimes undefined). By default, TypeScript has strict null-checking, which helps ensure better type safety.

function greet(name: string | null): string {
    if (name === null) {
        return 'Hello, guest!';
    }
    return `Hello, ${name}!`;
}

console.log(greet(null)); // Output: Hello, guest!
console.log(greet('Safi')); // Output: Hello, Safi!
