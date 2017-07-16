"use strict";
// **************************************************
// // Error!
// class Person {
//     public id: string;
//     public age: number;
//     public active: boolean;
//     public fullName: string;
// }
// **************************************************
Object.defineProperty(exports, "__esModule", { value: true });
var Person = (function () {
    // public constructor() {
    // }
    function Person(fullName, age) {
        this.age = age;
        this.fullName = fullName;
    }
    return Person;
}());
exports.Person = Person;
// **************************************************
//# sourceMappingURL=person.js.map