// **************************************************
// // Error!
// class Person {
//     public id: string;
//     public age: number;
//     public active: boolean;
//     public fullName: string;
// }
// **************************************************

// **************************************************
// export class Person {
//     public id: string;
//     public age: number;
//     public active: boolean;
//     public fullName: string;
// }
// **************************************************

// **************************************************
// // Error!
// export class Person implements IPerson {
//     public id: string;
//     public age: number;
//     public active: boolean;
//     public fullName: string;
// }
// **************************************************

// **************************************************
// // Error!
// import { IPerson } from './interfaces';

// export class Person implements IPerson {
//     public age: number;
// }
// **************************************************

// **************************************************
// // Note: It's better to use interface!
// import { IPerson } from './interfaces';

// export class Person implements IPerson {
//     public constructor() {
//     }

//     public id: string;
//     public age: number;
//     public active: boolean;
//     public fullName: string;
// }
// **************************************************

// **************************************************
import { IPerson } from './interfaces';

export class Person implements IPerson {
    // public constructor() {
    // }

    public constructor(fullName: string, age: number) {
        this.age = age;
        this.fullName = fullName;
    }

    public id: string;
    public age: number;
    public active: boolean;
    public fullName: string;
}
// **************************************************
