// **************************************************
// // Error!
// interface IPerson {
//     public id: string;
//     public age: number;
//     public active: boolean;
//     public fullName: string;
// }
// **************************************************

// **************************************************
// // Error!
// export interface IPerson {
//     public id: string;
//     public age: number;
//     public active: boolean;
//     public fullName: string;
// }
// **************************************************

// **************************************************
export interface IPerson {
    id: string;
    age: number;
    active: boolean;
    fullName: string;
}
// **************************************************

// **************************************************
export interface IItem {
    name: string;
    price: number;
    count: number;

    plus(): void;
    minus(): void;
}
// **************************************************
