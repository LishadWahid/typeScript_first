# Type Narrowing in TypeScript with Practical Examples

## Introduction

Type Narrowing is an important feature in TypeScript. It helps developers make a variable's type more specific after checking its actual type. It is especially useful when working with union types.

## Detailed Explanation

TypeScript provides several ways to narrow types. Three common methods are `typeof`, `instanceof`, and the `in` operator.

### 1. Using typeof

The `typeof` operator checks primitive types such as strings and numbers.

```ts
function printValue(value: string | number): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}
```

Here, TypeScript understands that value is a string inside the first block and a number inside the second block.

### 2. Using instanceof

The `instanceof` operator checks whether an object belongs to a particular class.

```ts
class Dog {
    bark(): void {
        console.log("Woof!");
    }
}

function makeSound(animal: Dog | Date): void {
    if (animal instanceof Dog) {
        animal.bark();
    }
}
```

TypeScript knows that animal is a Dog inside the condition.

### 3. Using the in Operator

The `in` operator checks whether an object contains a specific property.

```ts
type Admin = { role: string };
type User = { email: string };

function showInfo(person: Admin | User): void {
    if ("role" in person) {
        console.log(person.role);
    } else {
        console.log(person.email);
    }
}
```

## Conclusion

Type Narrowing makes TypeScript code safer and easier to understand. By using `typeof`, `instanceof`, and `in`, developers can check values before accessing their properties or methods.