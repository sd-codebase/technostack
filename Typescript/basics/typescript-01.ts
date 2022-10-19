Generics
  TypeScript Generics is a tool which provides a way to create reusable components. 
  In generics, we use type parameter between the open (<) and close (>) brackets
  function identity<T>(arg: T): T {    
    return arg;    
  }    
  let output1 = identity<string>("myString");    
  let output2 = identity<number>( 100 );  


Tuples
  A tuple is a typed array with a pre-defined length and types for each index
  // define our tuple
  let ourTuple: [number, boolean, string];

  // initialize correctly
  ourTuple = [5, false, 'Coding God was here'];


keyOf
  keyof is a keyword in TypeScript which is used to extract the key type from an object type.
  interface Person {
    name: string;
    age: number;
  }
  // `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
  function printPersonProperty(person: Person, property: keyof Person) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
  }


Utility Types
  https://www.w3schools.com/typescript/typescript_utility_types.php
  TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.
  Partial changes all the properties in an object to be optional.
  Required changes all the properties in an object to be required.
  Record is a shortcut to defining an object type with a specific key type and value type.
  Omit removes keys from an object type.
  Pick removes all but the specified keys from an object type.