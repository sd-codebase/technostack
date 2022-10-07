1- Variable in TypeScript

let myName: string;
let myFullName = 'John' ;



2- Types

let a: string; let b: number, let c: boolean;
let arrNum: number[]; let strArray: Array<num>;
let anyVar: any;
function abc(name: string) : string {
  return modifiedName;
}

let id: number | string;
type ID = number | string; let id: ID;
interface Point {
  x: number;
  y: number;
}
let num: number = "25" as number; let num: number = <number> "25";
enum Size {
  Small = 'small', Large = 'large',
}




3- Type Aliasing

type Second = number;
 
let timeInSecond: number = 10;
let time: Second = 10;




4- Interface
interface IPerson { 
   firstName:string, 
   lastName:string, 
   sayHi: ()=>string 
} 




5- Interface vs Types
let ob: IPerson {
  firstName: "John", 
  lastName: "Deo", 
  sayHi: ()=> `Name is ${this.firstName} ${this.lastName}`, 
}

type Name = String;
let myName: Name;




6- Enums
enum Direction {
  Up,
  Down,
  Left,
  Right,
}




7- Union

type PayWay = PayPal | Cash | CreditCard;




8- Intersection

interface IName {
  fName: string;
  lName: string;
}

interface IAddress {
  address: string;
}

type Person = IName & IAddress;




9- Classes and Objects
class Person {};
let p1 = new Person();




10- Static Members
class Circle {
  static pi: number = 3.14;
  
  static calculateArea(radius:number) {
    return this.pi * radius * radius;
  }
}
Circle.pi; // returns 3.14
Circle.calculateArea(5); // returns 78.5

