// **************************************************
// Backtick -> ` -> The key is below of Esc key!
// **************************************************

// **************************************************
// @Component({
//     selector: 'my-app',
//     template: `<h1>Hello, World!</h1>`
// })
// export class AppComponent {
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `<h1>Hello, World!</h1>`
// })
// export class AppComponent {
// }
// **************************************************

// **************************************************
// Note: دقت داشته باشید که باید تگ‌ها را به درستی نوشته و بکارببرید
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `<h1>Hello, World!</h1></br><B>I'm Dariush Tasdighi</b> `
// })
// export class AppComponent {
// }
// **************************************************

// **************************************************
// // Learning Expression And Backtick
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     <h1>{{5 + 2}}</h1>
//     <h1>{{5 - 2}}</h1>
//     <h1>{{5 * 2}}</h1>
//     <h1>{{5 / 2}}</h1>
//     <h1>{{'Dariush' + ' ' + 'Tasdighi'}}</h1>
//     <h1>{{'Dariush Tasdighi' | lowercase}}</h1>
//     <h1>{{'Dariush Tasdighi' | uppercase}}</h1>
//     `
// })
// export class AppComponent {
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `<h1>Hello, {{name}}</h1>`
// })
// export class AppComponent {
//     // name = 'Dariush Tasdighi';
//     // name: string = 'Dariush Tasdighi';
//     public name: string = 'Dariush Tasdighi';
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `<h1>Hello, {{name}}</h1>`
// })
// export class AppComponent {
//     private name: string;

//     constructor() {
//         // Note: Wrong Usage!
//         // name = 'Dariush Tasdighi';

//         this.name = 'Dariush Tasdighi';
//     }
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `<h1>Hello, {{name}}</h1>`
// })
// export class AppComponent {
//     constructor() {
//         this.name = 'Dariush Tasdighi';
//     }

//     private name: string;
// }
// **************************************************

// **************************************************
// // [()] -> Banana in the Box
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     <input type="text" [(ngModel)]="name" />
//     <h1>{{name}}</h1>
//     `
// })
// export class AppComponent {
//     private name: string;
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     <input type="text" [(ngModel)]="name" />
//     <h1>{{name}}</h1>
//     <h1>{{name | lowercase}}</h1>
//     <h1>{{name | uppercase}}</h1>
//     `
// })
// export class AppComponent {
//     private name: string;
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     <input type="text" [(ngModel)]="name" />
//     <h1>{{name}}</h1>
//     `
// })
// export class AppComponent {
//     private name: string = 'Dariush Tasdighi';
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     <input type="text" [(ngModel)]="name" />
//     <h1>{{name}}</h1>
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.name = 'Dariush Tasdighi';
//     }

//     private name: string;
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     <input type="text" [(ngModel)]="name" />
//     <br />
//     <input type="text" [(ngModel)]="name" />
//     <br />
//     <h1>{{name}}</h1>
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.name = 'Dariush Tasdighi';
//     }

//     private name: string;
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     <input type="text" [(ngModel)]="name" />
//     <h1>{{name}}</h1>
//     `,
//     styles: [
//         'h1 { color: blue; }',
//         'input { color: red; }'
//     ],
// })
// export class AppComponent {
//     public constructor() {
//         this.name = 'Dariush Tasdighi';
//     }

//     private name: string;
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     templateUrl: './app.component.html',
//     styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//     public constructor() {
//         this.name = 'Dariush Tasdighi';
//     }

//     private name: string;
// }
// **************************************************

// **************************************************
// // // // // import { Component } from '@angular/core';

// // // // // @Component({
// // // // //   selector: 'my-app',
// // // // //   template: `
// // // // //     <input type="checkbox" [(ngModel)]="display" />
// // // // //     <h1 (hidden)="!display">Hello, World!</h1>
// // // // //     `
// // // // // })
// // // // // export class AppComponent {
// // // // //   public display: Boolean = false;
// // // // // }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     <input type="checkbox" [(ngModel)]="display" />
//     <br />
//     <h1 *ngIf="display">Hello, World!</h1>
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.display = true;
//     }

//     private display: Boolean;
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// // import { Person } from 'models/Person'; // Error!
// // import { Person } from '/models/Person'; // Error!
// // import { Person } from './Models/Person'; // Note: It is OK! Not Case Sensitive!
// // import { Person } from './models/person.ts'; // Error!
// // import { Person } from './models//person.js'; // Note: It is OK!
// import { Person } from './models/person'; // Note: But this is better!

// @Component({
//     selector: 'my-app',
//     template: `
//     Age: {{person.age}}
//     <br />
//     Full Name: {{person.fullName}}
//   `
// })
// export class AppComponent {
//     public constructor() {
//         this.person = new Person();

//         this.person.age = 44;
//         this.person.fullName = 'Dariush Tasdighi';
//     }

//     private person: Person;
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// import { Person } from './models/person';
// import { IPerson } from './models/interfaces';

// @Component({
//     selector: 'my-app',
//     template: `
//     Age: {{person.age}}
//     <br />
//     Full Name: {{person.fullName}}
//   `
// })
// export class AppComponent {
//     public constructor() {
//         this.person = new Person();

//         this.person.age = 44;
//         this.person.fullName = 'Dariush Tasdighi';
//     }

//     private person: IPerson;
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template:
//     `
//     <button type="button" (click)="doSomething()">Click Me!</button>
//     `
// })
// export class AppComponent {
//     public constructor() {
//     }

//     private doSomething(): void {
//         alert('Hello, World!');
//     }
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// import { Person } from './models/person';
// import { IPerson } from './models/interfaces';

// @Component({
//     selector: 'my-app',
//     template:
//     `
//     <ul>
//         <li *ngFor="let item of people">
//             Full Name: {{item.fullName}}, Age: {{item.age}}
//         </li>
//     </ul>
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.people =
//             [
//                 new Person('Full Name (1)', 21),
//                 new Person('Full Name (2)', 22),
//                 new Person('Full Name (3)', 23),
//                 new Person('Full Name (4)', 24),
//                 new Person('Full Name (5)', 25),
//             ];
//     }

//     private people: IPerson[];
//     // private people: Person[];
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// import { Person } from './models/person';
// import { IPerson } from './models/interfaces';

// @Component({
//     selector: 'my-app',
//     template: `
//     <ul>
//       <li *ngFor="let item of people">
//         <button type="button" (click)="details(item)">Details</button>
//         Full Name: {{item.fullName}}, Age: {{item.age}}
//       </li>
//     </ul>
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.people =
//             [
//                 new Person('Full Name (1)', 21),
//                 new Person('Full Name (2)', 22),
//                 new Person('Full Name (3)', 23),
//                 new Person('Full Name (4)', 24),
//                 new Person('Full Name (5)', 25),
//             ];
//     }

//     private people: IPerson[];

//     private details(person: IPerson): void {
//         let message: string;

//         message =
//             'Full Name: ' + person.fullName + '\n Age: ' + person.age;

//         alert(message);
//     }
// }
// **************************************************
// **************************************************
// **************************************************



// **************************************************
// **************************************************
// **************************************************
// // Note: Predefined Variables in NgFor: index, first, last, odd, even
// import { Component } from '@angular/core';

// import { Item } from './models/item';
// import { IItem } from './models/interfaces';

// @Component({
//     selector: 'my-app',
//     template: `
//     <table class="table table-bordered">
//       <tr>
//         <th>#</th>
//         <th>Name</th>
//         <th>Price</th>
//         <th>Count</th>
//         <th>Functions</th>
//         <th>Sub Total</th>
//       </tr>

//       <tr *ngFor="let item of items; let i = index;">
//         <td>{{i + 1}}</td>
//         <td>{{item.name}}</td>
//         <td>{{item.price}}</td>
//         <td>{{item.count}}</td>
//         <td>
//           <button type="button" (click)="plus(item)">+</button>
//           <button type="button" (click)="minus(item)">-</button>
//         </td>
//         <td>{{item.price * item.count}}</td>
//       </tr>
//     </table>
//     `
// })
// export class AppComponent {
//     private items: IItem[];

//     public constructor() {
//         this.items = [
//             new Item('Product (1)', 10, 1),
//             new Item('Product (2)', 20, 1),
//             new Item('Product (3)', 30, 1),
//         ];
//     }

//     private plus(item: IItem): void {
//         if (item.count < 10) {
//             item.count++;
//         }
//     }

//     private minus(item: IItem): void {
//         if (item.count > 0) {
//             item.count--;
//         }
//     }
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// import { Item } from './models/item';
// import { IItem } from './models/interfaces';

// @Component({
//     selector: 'my-app',
//     template: `
//     <table class="table table-bordered">
//       <tr>
//         <th>#</th>
//         <th>Name</th>
//         <th>Price</th>
//         <th>Count</th>
//         <th>Functions</th>
//         <th>Sub Total</th>
//       </tr>

//       <tr *ngFor="let item of items; let i = index;">
//         <td>{{i + 1}}</td>
//         <td>{{item.name}}</td>
//         <td>{{item.price}}</td>
//         <td>{{item.count}}</td>
//         <td>
//           <button type="button" (click)="plus(item)">+</button>
//           <button type="button" (click)="minus(item)">-</button>
//         </td>
//         <td>{{subTotal(item)}}</td>
//       </tr>

//       <tr>
//         <td colspan="5"></td>
//         <td>{{total()}}</td>
//       </tr>
//     </table>
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.items = [
//             new Item("Product (1)", 10, 1),
//             new Item("Product (2)", 20, 1),
//             new Item("Product (3)", 30, 1),
//         ];
//     }

//     public items: IItem[];

//     public plus(item: IItem): void {
//         // if (item.count < 10) {
//         //     item.count++;
//         // }

//         item.plus();
//     }

//     public minus(item: IItem): void {
//         // if (item.count > 0) {
//         //     item.count--;
//         // }

//         item.minus();
//     }

//     public subTotal(item: IItem): number {
//         if (item.count < 6) {
//             return (item.count * item.price);
//         }
//         else {
//             return (item.count * item.price * 0.95);
//         }
//     }

//     public total(): number {
//         let total: number = 0;

//         for (let index: number = 0; index < this.items.length; index++) {
//             total += this.subTotal(this.items[index]);
//         }

//         return (total);
//     }
// }
// **************************************************
// **************************************************
// **************************************************

// Learning One Way and Two Way Binding!

// **************************************************
// **************************************************
// **************************************************
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     Message: {{message}}
//     <br />
//     <input type="text" [ngModel]="message" />
//     <br />
//     <button type="button" (click)="changeMessage()">Change Message</button>
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.message = "Hello, World!";
//     }

//     // Note: One Way Binding!
//     private message: string;

//     private changeMessage(): void {
//         this.message = "New Message!";
//     }
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     Message: {{message}}
//     <br />
//     <input type="text" [(ngModel)]="message" />
//     <br />
//     <button type="button" (click)="changeMessage()">Change Message</button>
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.message = "Hello, World!";
//     }

//     // Note: Two Way Binding!
//     private message: string;

//     private changeMessage(): void {
//         this.message = "New Message!";
//     }
// }
// **************************************************
// **************************************************
// **************************************************

// فرض کنید که صرفا می‌خواهیم یک متن را نسبت به شرایط نمایش داده و یا نمایش ندهیم

// **************************************************
// **************************************************
// **************************************************
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     <input type="checkbox" [(ngModel)]="displayCheckBox" />
//     <hr />
//     <span *ngIf="displayCheckBox">Hello, World!</span>
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.displayCheckBox = true;
//     }

//     private displayCheckBox: boolean;
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     <input type="checkbox" [(ngModel)]="displayCheckBox" />
//     <hr />
//     <ng-container *ngIf="displayCheckBox">Hello, World!</ng-container>
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.displayCheckBox = true;
//     }

//     private displayCheckBox: boolean;
// }
// **************************************************
// **************************************************
// **************************************************

// Solving access to null objects!

// **************************************************
// **************************************************
// **************************************************
// import { Person } from './models/person';
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     Full Name: {{person}}
//     `
// })
// export class AppComponent {
//     public constructor() {
//         // دقت داشته باشید که مقدار اولیه تمام فیلدهای شیء این کلاس
//         // [undefined]
//         // می‌باشد نه
//         // [null]

//         // this.person = null;

//         // this.person =
//         //     new Person('Dariush Tasdighi', 44);
//     }

//     private person: Person;
// }
// **************************************************

// **************************************************
// import { Person } from './models/person';
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     Full Name: {{person.fullName}}
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.person =
//             new Person('Dariush Tasdighi', 44);
//     }

//     private person: Person;
// }
// **************************************************

// **************************************************
// import { Person } from './models/person';
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     Full Name: {{person.fullName}}
//     `
// })
// export class AppComponent {
//     public constructor() {
//     }

//     // Error: Cannot read property 'fullName' of undefined
//     private person: Person;
// }
// **************************************************

// **************************************************
// import { Person } from './models/person';
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     Full Name: {{person.fullName}}
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.person = null;
//     }

//     // Error: Cannot read property 'fullName' of null
//     private person: Person;
// }
// **************************************************

// **************************************************
// import { Person } from './models/person';
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     <span *ngIf="person">
//       Full Name: {{person.fullName}}
//     </span>
//     `
// })
// export class AppComponent {
//     public constructor() {
//     }

//     private person: Person;
// }
// **************************************************

// **************************************************
// import { Person } from './models/person';
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     <ng-container *ngIf="person">
//       Full Name: {{person.fullName}}
//     </ng-container>
//     `
// })
// export class AppComponent {
//     public constructor() {
//     }

//     private person: Person;
// }
// **************************************************

// **************************************************
// import { Person } from './models/person';
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     Full Name: {{person?.fullName}}
//     `
// })
// export class AppComponent {
//     public constructor() {
//         // this.person = null;
//     }

//     private person: Person;
// }
// **************************************************
// Note: X?.Y?.Z?.T
// **************************************************
// **************************************************
// **************************************************

// Working on Drop Down Lists

// **************************************************
// **************************************************
// **************************************************
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     <select [(ngModel)]="selectedNumber">
//       <option *ngFor="let item of numbers" [ngValue]="item">Item {{item}}</option>
//     </select>
//     <hr />
//     Selected Number: {{selectedNumber}}
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//         this.selectedNumber = 5;
//     }

//     private numbers: number[];
//     private selectedNumber: number;
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     <select [(ngModel)]="selectedNumber">
//       <option [ngValue]="null">Select an item...</option>
//       <option *ngFor="let item of numbers" [ngValue]="item">{{item}}</option>
//     </select>
//     <hr />
//     Selected Number: {{selectedNumber}}
//     `
// })
// export class AppComponent {
//     public constructor() {
//         // this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//         this.numbers = []; // Note: It is too important!
//         for (let index: number = 1; index <= 9; index++) {
//             this.numbers.push(index);
//         }

//         this.selectedNumber = null;
//     }

//     private numbers: number[];
//     private selectedNumber?: number;
// }
// **************************************************

// **************************************************
// import { Person } from './models/person';
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     <select [(ngModel)]="selectedPerson">
//       <option [ngValue]="null">Select an item...</option>
//       <option *ngFor="let item of people" [ngValue]="item">{{item.fullName + " - " + item.age}}</option>
//     </select>
//     <hr />
//     Selected Age: {{selectedPerson?.age}}
//     <br />
//     Selected Full Name: {{selectedPerson?.fullName}}
//     <hr />
//     <span *ngIf="selectedPerson === null">The Selected Person is absolutely [null]!</span>
//     <span *ngIf="selectedPerson === undefined">The Selected Person is absolutely [undefined]!</span>
//     `
// })
// export class AppComponent {
//     public constructor() {

//         this.people = []; // Note: It is too important!
//         for (let index: number = 1; index <= 9; index++) {
//             let thePerson: Person =
//                 new Person("Full Name " + index, 20 + index);

//             this.people.push(thePerson);
//         }

//         // تفکر دستور ذیل کاملا غلط است
//         // this.selectedPerson =
//         //     new Person("Full Name 2", 22);

//         this.selectedPerson = this.people[1];

//         // خیلی مهم است که دستور ذیل نوشته شود
//         // تمام متغیرهایی که در سطح کلاس تعریف می‌شوند
//         // بر خلاف زبان سی شارپ که مقدار اولیه و یا نال می‌باشند
//         // در تایپ اسکریپت مقدار اولیه همه آنها
//         // undefined
//         // می‌باشد 
//         // this.selectedPerson = null;
//     }

//     private people: Person[];
//     private selectedPerson: Person;
// }
// **************************************************

// **************************************************
// import { Person } from './models/person';
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     <select [(ngModel)]="selectedAge">
//       <option [ngValue]="null">Select an item...</option>
//       <option *ngFor="let item of people" [ngValue]="item.age">{{item.fullName + " - " + item.age}}</option>
//     </select>
//     <hr />
//     Selected Age: {{selectedAge}}
//     `
// })
// export class AppComponent {
//     public constructor() {

//         this.people = []; // Note: It is too important!
//         for (let index: number = 1; index <= 9; index++) {
//             let thePerson: Person =
//                 new Person("Full Name " + index, 20 + index);

//             this.people.push(thePerson);
//         }

//         this.selectedAge = 22

//         // this.selectedAge = null;
//     }

//     private people: Person[];
//     private selectedAge?: number;
// }
// **************************************************
// **************************************************
// **************************************************



// **************************************************
// **************************************************
// **************************************************
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-child',
//     template: `
//     Hello, World!
//     <br />
//     I'm Dariush Tasdighi
//     `
// })
// export class ChildComponent {
//     public constructor() {
//     }
// }

// @Component({
//     selector: 'my-app',
//     template: `
//     <h3><my-child></my-child></h3>
//     `
// })
// export class AppComponent {
//     public constructor() {
//     }
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-child',
//     template: `
//     Hello, World!
//     <br />
//     I'm Dariush Tasdighi
//     <hr />
//     `
// })
// export class ChildComponent {
//     public constructor() {
//     }
// }

// @Component({
//     selector: 'my-app',
//     template: `
//     <h3><my-child></my-child></h3>
//     <h3><my-child></my-child></h3>
//     <h3><my-child></my-child></h3>
//     <h3><my-child></my-child></h3>
//     <h3><my-child></my-child></h3>
//     `
// })
// export class AppComponent {
//     public constructor() {
//     }
// }
// **************************************************

// **************************************************
// import { Component, Input } from '@angular/core';

// @Component({
//     selector: 'my-child',
//     template: `
//     <div class="alert alert-info">{{message}}</div>
//     `
// })
// export class ChildComponent {
//     @Input() message: string;

//     public constructor() {
//     }
// }

// @Component({
//     selector: 'my-app',
//     template: `
//     <my-child [message]="myMessage"></my-child>
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.myMessage = 'I am Dariush Tasdighi.';
//     }

//     private myMessage: string;
// }
// **************************************************

// **************************************************
// import { Component, Input } from '@angular/core';

// @Component({
//     selector: 'my-child',
//     template: `
//     <div class="alert alert-info">{{message}}</div>
//     `
// })
// export class ChildComponent {
//     @Input() message: string;

//     public constructor() {
//     }
// }

// @Component({
//     selector: 'my-app',
//     template: `
//     <my-child [message]="myMessage1"></my-child>
//     <br />
//     <my-child [message]="myMessage2"></my-child>
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.myMessage1 = 'Hello, World!';
//         this.myMessage2 = 'I am Dariush Tasdighi.';
//     }

//     private myMessage1: string;
//     private myMessage2: string;
// }
// **************************************************

// **************************************************
// import { Component, Input } from '@angular/core';

// @Component({
//     selector: 'my-child',
//     template: `
//     <h3>{{message}}</h3>
//     <button type="button" (click)="changeMessage()">Change Message</button>
//     `
// })
// export class ChildComponent {
//     @Input() message: string;

//     public constructor() {
//     }

//     private changeMessage(): void {
//         this.message = 'Message Changed!';
//     }
// }

// @Component({
//     selector: 'my-app',
//     template: `
//     My Message: {{myMessage}}
//     <br />
//     <button type="button" (click)="changeAgainMessage()">Change Again Message</button>
//     <hr />
//     <my-child [message]="myMessage"></my-child>
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.myMessage = 'I am Dariush Tasdighi.';
//     }

//     private myMessage: string;

//     private changeAgainMessage(): void {
//         this.myMessage = 'Hello, World!';
//     }
// }
// **************************************************

// **************************************************
// چیزی برای گفتن ندارم
// import { Component, Input } from '@angular/core';

// @Component({
//     selector: 'my-child',
//     template: `
//     <h3>{{message}}</h3>
//     <input type="text" [(ngModel)]="message" />
//     `
// })
// export class ChildComponent {
//     @Input() message: string;

//     public constructor() {
//     }
// }

// @Component({
//     selector: 'my-app',
//     template: `
//     My Message: {{myMessage}}
//     <br />
//     <input type="text" [(ngModel)]="myMessage" />
//     <hr />
//     <my-child [message]="myMessage"></my-child>
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.myMessage = 'I am Dariush Tasdighi.';
//     }

//     private myMessage: string;
// }
// **************************************************

// **************************************************
// import { Person } from './models/person';
// import { Component, Input } from '@angular/core';

// @Component({
//     selector: 'my-child',
//     template: `
//     <h3>{{thePerson?.fullName}}</h3>
//     <input type="text" [(ngModel)]="thePerson.fullName" />
//     `
// })
// export class ChildComponent {
//     @Input() thePerson: Person;

//     public constructor() {
//     }
// }

// @Component({
//     selector: 'my-app',
//     template: `
//     Person Full Name: {{myPerson?.fullName}}
//     <hr />
//     <my-child [thePerson]="myPerson"></my-child>
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.myPerson =
//             new Person('Dariush Tasdighi', 44);
//     }

//     private myPerson: Person;
// }
// **************************************************

// **************************************************
// import { Component, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//     selector: 'my-child',
//     template: `
//     <h3>{{message}}</h3>
//     <button type="button" (click)="changeMessage()">Change Message</button>
//     `
// })
// export class ChildComponent {
//     @Input() message: string;
//     @Output() onMessageChanged = new EventEmitter<string>();

//     public constructor() {
//     }

//     private changeMessage(): void {
//         // دستور ذیل عرف نیست
//         // this.message = 'I am new message!';

//         this.onMessageChanged.emit('I am new message!');
//     }
// }

// @Component({
//     selector: 'my-app',
//     template: `
//     My Message: {{myMessage}}
//     <hr />
//     <my-child [message]="myMessage" (onMessageChanged)="doSomething($event)"></my-child>
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.myMessage = 'I am Dariush Tasdighi.';
//     }

//     private myMessage: string;

//     private doSomething(sentMessage: string): void {
//         this.myMessage = sentMessage;
//     }
// }
// **************************************************

// **************************************************
// import { Component, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//     selector: 'my-child',
//     template: `
//     <h3>{{message}}</h3>
//     <button type="button" (click)="changeMessage()">Change Message</button>
//     `
// })
// export class ChildComponent {
//     @Input() message: string;
//     @Output() onMessageChanged = new EventEmitter<string>();

//     public constructor() {
//     }

//     private changeMessage(): void {
//         this.onMessageChanged.emit('I am new message!');
//     }
// }

// @Component({
//     selector: 'my-app',
//     template: `
//     My Message: {{myMessage}}
//     <hr />
//     <my-child [message]="myMessage" (onMessageChanged)="myMessage=$event"></my-child>
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.myMessage = 'I am Dariush Tasdighi.';
//     }

//     private myMessage: string;
// }
// **************************************************
// **************************************************
// **************************************************



// **************************************************
// **************************************************
// **************************************************
// مثال کاربردی
// **************************************************
// import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

// @Component({
//     selector: 'dtx-numeric-select',
//     template:
//     `
//     <select [(ngModel)]="value" (ngModelChange)="changeValue($event)">
//       <option [ngValue]="null">Select an item...</option>
//       <option *ngFor="let item of numbers" [ngValue]="item">{{item}}</option>
//     </select>
//     `
// })
// export class DtxNumericSelectComponent implements OnInit {
//     @Input() min?: number;
//     @Input() max?: number;
//     @Input() value?: number;
//     @Output() onValueChanged = new EventEmitter<number>();

//     private numbers: number[];

//     public constructor() {
//         this.numbers = [];

//         // for (let i = 1; i <= 100; i++) {
//         //   this.numbers.push(i);
//         // }

//         // for (let i = this.min; i <= this.max; i++) {
//         //   this.numbers.push(i);
//         // }
//     }

//     ngOnInit() {
//         // Called after the constructor and called after the first ngOnChanges()

//         debugger;

//         if (this.min === undefined) {
//             this.min = null;
//             this.max = null;
//         }

//         if (this.max === undefined) {
//             this.min = null;
//             this.max = null;
//         }

//         if ((this.min !== null) && (this.max !== null)) {
//             if (this.min > this.max) {
//                 this.min = null;
//                 this.max = null;
//             }
//             else {
//                 for (let i: number = this.min; i <= this.max; i++) {
//                     this.numbers.push(i);
//                 }
//             }
//         }
//     }

//     ngAfterViewInit() {
//         setTimeout(() => {
//             if (this.value === undefined) {
//                 this.value = null;
//                 this.changeValue(null);
//             }

//             if ((this.min === null) || (this.max === null)) {
//                 this.value = null;
//                 this.changeValue(null);
//             }
//             else {
//                 if (this.value !== null) {
//                     if ((this.value < this.min) || (this.value > this.max)) {
//                         this.value = null;
//                         this.changeValue(null);
//                     }
//                 }
//             }
//         }, 1);
//     }

//     public changeValue(newValue?: number): void {
//         this.onValueChanged.emit(newValue);
//     }
// }

// @Component({
//     selector: 'my-app',
//     template: `
//     Value (1): {{value1}}
//     <br />
//     Value (2): {{value2}}
//     <br />
//     Value (3): {{value3}}
//     <br />
//     Value (4): {{value4}}
//     <br />
//     Value (5): {{value5}}
//     <br />
//     Value (6): {{value6}}
//     <br />
//     Value (7): {{value7}}
//     <br />
//     Value (8): {{value8}}
//     <hr />
//     <dtx-numeric-select [value]="value1" [min]="1" [max]="10" (onValueChanged)="value1=$event"></dtx-numeric-select>
//     <br />
//     <dtx-numeric-select [value]="value2"           [max]="10" (onValueChanged)="value2=$event"></dtx-numeric-select>
//     <br />
//     <dtx-numeric-select [value]="value3" [min]="1"            (onValueChanged)="value3=$event"></dtx-numeric-select>
//     <br />
//     <dtx-numeric-select [value]="value4" [min]="1" [max]="10" (onValueChanged)="value4=$event"></dtx-numeric-select>
//     <br />
//     <dtx-numeric-select [value]="value5" [min]="1" [max]="10" (onValueChanged)="value5=$event"></dtx-numeric-select>
//     <br />
//     <dtx-numeric-select [value]="value6" [min]="1" [max]="10" (onValueChanged)="value6=$event"></dtx-numeric-select>
//     <br />
//     <dtx-numeric-select [value]="value7" [min]="1" [max]="10" (onValueChanged)="value7=$event"></dtx-numeric-select>
//     <br />
//     <dtx-numeric-select [value]="value8" [min]="10" [max]="1" (onValueChanged)="value8=$event"></dtx-numeric-select>
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.value1 = 5;
//         this.value2 = 5;
//         this.value3 = 5;
//         this.value4 = 100;
//         this.value5 = -100;
//         this.value6 = null;
//         this.value7 = undefined;
//         this.value8 = 5;
//     }

//     public value1: number;
//     public value2: number;
//     public value3: number;
//     public value4: number;
//     public value5: number;
//     public value6: number;
//     public value7: number;
//     public value8: number;
// }
// **************************************************
// **************************************************
// **************************************************



// **************************************************
// **************************************************
// **************************************************
// Learning Attribute Directive
// **************************************************
// import { Directive, ElementRef, Component } from '@angular/core';

// @Directive({
//     selector: '[myHighlight]',
// })
// export class HightlightDirective {
//     public constructor(private element: ElementRef) {
//         element.nativeElement.style.backgroundColor = 'yellow';
//     }
// }

// @Component({
//     selector: 'my-app',
//     template: `
//     <p myHighlight>Hello, World!</p>
//     <p>Hello, World!</p>
//     <p myHighlight>Hello, World!</p>
//     <p>Hello, World!</p>
//     <p myHighlight>Hello, World!</p>
//     `
// })
// export class AppComponent {
//     public constructor() {
//     }
// }
// **************************************************

// **************************************************
// import { Directive, ElementRef, HostListener, Component } from '@angular/core';

// @Directive({
//     selector: '[myHighlight]',
// })
// export class HightlightDirective {
//     public constructor(private element: ElementRef) {
//         element.nativeElement.style.backgroundColor = null;
//     }

//     // public constructor(element: ElementRef) {
//     //     this.element = element;

//     //     this.element.nativeElement.style.backgroundColor = null;
//     // }

//     // private element: ElementRef;

//     @HostListener('mouseenter') onMouseEnter() {
//         this.hightlight('yellow');
//     }

//     @HostListener('mouseleave') onMouseLeave() {
//         this.hightlight(null);
//     }

//     private hightlight(color: string) {
//         this.element.nativeElement.style.backgroundColor = color;
//     }
// }

// @Component({
//     selector: 'my-app',
//     template: `
//     <p myHighlight>Hello, World!</p>
//     <p>Hello, World!</p>
//     <p myHighlight>Hello, World!</p>
//     <p>Hello, World!</p>
//     <p myHighlight>Hello, World!</p>
//     `
// })
// export class AppComponent {
//     public constructor() {
//     }
// }
// **************************************************

// **************************************************
// import { Directive, ElementRef, HostListener, Component, Input } from '@angular/core';

// @Directive({
//     selector: '[myHighlight]',
// })
// export class HightlightDirective {
//     @Input() hightlightColor: string;

//     public constructor(private element: ElementRef) {
//         element.nativeElement.style.backgroundColor = null;
//     }

//     @HostListener('mouseenter') onMouseEnter() {
//         this.hightlight(this.hightlightColor);
//     }

//     @HostListener('mouseleave') onMouseLeave() {
//         this.hightlight(null);
//     }

//     private hightlight(color: string) {
//         this.element.nativeElement.style.backgroundColor = color;
//     }
// }

// @Component({
//     selector: 'my-app',

//     template: `
//         <p myHighlight [hightlightColor]="color">Hello, World!</p>
//         <p myHighlight [hightlightColor]="'yellow'">Hello, World!</p>

//         <h3>Below: Does Not Work!</h3>
//         <p myHighlight [hightlightColor]="yellow">Hello, World!</p>

//         <h3>Below: One Way, One Time!</h3>
//         <p myHighlight hightlightColor="yellow">Hello, World!</p>
//       `
// })
// export class AppComponent {
//     public constructor() {
//         this.color = 'yellow';
//     }

//     private color: string;
// }
// **************************************************

// **************************************************
// import { Directive, ElementRef, HostListener, Component, Input } from '@angular/core';

// @Directive({
//     selector: '[myHighlight]',
// })
// export class HightlightDirective {
//     @Input() myHighlight: string;

//     public constructor(private element: ElementRef) {
//         element.nativeElement.style.backgroundColor = null;
//     }

//     @HostListener('mouseenter') onMouseEnter() {
//         this.hightlight(this.myHighlight);
//     }

//     @HostListener('mouseleave') onMouseLeave() {
//         this.hightlight(null);
//     }

//     private hightlight(color: string) {
//         this.element.nativeElement.style.backgroundColor = color;
//     }
// }

// @Component({
//     selector: 'my-app',
//     template: `
//     <p [myHighlight]="color">Hello, World!</p>
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.color = 'yellow';
//     }

//     private color: string;
// }
// **************************************************

// **************************************************
// import { Directive, ElementRef, HostListener, Component, Input } from '@angular/core';

// @Directive({
//     selector: '[myHighlight]',
// })
// export class HightlightDirective {
//     @Input('myHighlight') highlightColor: string;

//     public constructor(private element: ElementRef) {
//         element.nativeElement.style.backgroundColor = null;
//     }

//     @HostListener('mouseenter') onMouseEnter() {
//         this.hightlight(this.highlightColor);
//     }

//     @HostListener('mouseleave') onMouseLeave() {
//         this.hightlight(null);
//     }

//     private hightlight(color: string) {
//         this.element.nativeElement.style.backgroundColor = color;
//     }
// }

// @Component({
//     selector: 'my-app',
//     template: `
//     <p [myHighlight]="color">Hello, World!</p>
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.color = 'yellow';
//     }

//     private color: string;
// }
// **************************************************
// **************************************************
// **************************************************

// LEARNING SYNC, ASYNC
// باید تست شود

// **************************************************
// **************************************************
// **************************************************
// // import { Person } from './models/person';
// // import { Component } from '@angular/core';

// // @Component({
// //     selector: 'my-app',
// //     template: `
// //     <h1>{{firstMessage}}</h1>
// //     <h1>{{secondMessage}}</h1>
// //     `
// // })
// // export class AppComponent {
// //     public constructor() {
// //         this.firstMessage = null;
// //         this.secondMessage = null;

// //         this.doSomething();

// //         this.secondMessage = 'I am second message!';
// //     }

// //     private people: Person[];
// //     private firstMessage: string;
// //     private secondMessage: string;

// //     private doSomething(): void {
// //         this.people = [];

// //         for (let index: number = 1; index <= 10000000; index++) {
// //             let person: Person =
// //                 new Person("Full Name " + index, 20 + index);

// //             this.people.push(person);
// //         }

// //         this.firstMessage = 'I am first message!';
// //     }
// // }
// // **************************************************

// // **************************************************
// // import { Person } from './models/person';
// // import { Component } from '@angular/core';

// // @Component({
// //     selector: 'my-app',
// //     template: `
// //     <h1>{{firstMessage}}</h1>
// //     <h1>{{secondMessage}}</h1>
// //     <h1>{{errorMessage}}</h1>
// //     `
// // })
// // export class AppComponent {
// //     public constructor() {
// //         this.errorMessage = null;
// //         this.firstMessage = null;
// //         this.secondMessage = null;

// //         this.doSomething()
// //             .then(result => this.firstMessage = result)
// //             .catch(error => this.errorMessage = <any>error);

// //         this.secondMessage = 'I am second message!';
// //     }

// //     private people: Person[];
// //     private errorMessage: string;
// //     private firstMessage: string;
// //     private secondMessage: string;

// //     private doSomething(): Promise<string> {
// //         this.people = [];

// //         for (let index: number = 1; index <= 1000; index++) {
// //             let person: Person =
// //                 new Person("Full Name " + index, 20 + index);

// //             this.people.push(person);
// //         }

// //         return (Promise.resolve('I am first message!'));
// //     }
// // }
// // **************************************************

// // **************************************************
// // import { Person } from './models/person';
// // import { Component } from '@angular/core';

// // import { Observable } from 'rxjs/Observable';
// // import 'rxjs/add/operator/map';
// // import 'rxjs/add/operator/catch';

// // @Component({
// //     selector: 'my-app',
// //     template: `
// //     <h1>{{firstMessage}}</h1>
// //     <h1>{{secondMessage}}</h1>
// //     <h1>{{errorMessage}}</h1>
// //     `
// // })
// // export class AppComponent {
// //     public constructor() {
// //         this.errorMessage = null;
// //         this.firstMessage = null;
// //         this.secondMessage = null;

// //         // this.doSomething()
// //         //     .subscribe(
// //         //         result => this.secondMessage = result,
// //         //         error => this.errorMessage = <any>error
// //         //     );

// //         this.doSomething();

// //         this.secondMessage = 'I am second message!';
// //     }

// //     private people: Person[];
// //     private errorMessage: string;
// //     private firstMessage: string;
// //     private secondMessage: string;

// //     private doSomething(): Observable<string> {
// //         this.people = [];

// //         for (let index: number = 1; index <= 10000000; index++) {
// //             let person: Person =
// //                 new Person("Full Name " + index, 20 + index);

// //             this.people.push(person);
// //         }

// //         alert('1111');

// //         this.firstMessage = 'I am first message!';

// //         return (null);
// //         // let x = new Observable<string>();

// //         // x.map()

// //         // return (Observable..resolve('I am first message!'));
// //     }
// // }
// **************************************************
// **************************************************
// **************************************************

// LEARNING SERVICES

// **************************************************
// **************************************************
// **************************************************
// import { Person } from './models/person';
// import { Component } from '@angular/core';

// @Component({
//     selector: 'my-app',
//     template: `
//     <h1>People List</h1>
//     <ul>
//       <li *ngFor="let item of people">{{item.fullName}}</li>
//     </ul>
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.people = [];

//         for (let index: number = 1; index <= 9; index++) {
//             let person: Person =
//                 new Person("Full Name " + index, 20 + index);

//             this.people.push(person);
//         }
//     }

//     private people: Person[];
// }
// **************************************************

// **************************************************
// import { Person } from './models/person';
// import { Component, Injectable } from '@angular/core';

// @Injectable()
// export class PersonService {
//     public getPeople(): Person[] {
//         let people: Person[] = [];

//         for (let index: number = 1; index <= 9; index++) {
//             let person: Person =
//                 new Person("Full Name " + index, 20 + index);

//             people.push(person);
//         }

//         return (people);
//     }
// }

// @Component({
//     selector: 'my-app',
//     template: `
//     <h1>People List</h1>
//     <h3>Mode: {{mode}}</h3>
//     <ul>
//       <li *ngFor="let item of people">{{item.fullName}}</li>
//     </ul>
//     <p class="error" *ngIf="errorMessage">{{errorMessage}}</p>
//     `,
//     providers: [PersonService], // Note: خیلی مهم
// })
// export class AppComponent {
//     public constructor(private personService: PersonService) {
//         // Note: Sync!
//         this.people =
//             this.personService.getPeople();
//     }

//     private people: Person[];
//     private errorMessage: string;
//     private mode: string = 'Normal (Without Promiss and Observable!)';
// }
// **************************************************

// **************************************************
// import { Person } from './models/person';
// import { Component, Injectable } from '@angular/core';

// @Injectable()
// export class PersonService {
//     getPeople(): Promise<Person[]> {
//         let people: Person[] = [];

//         for (let index: number = 1; index <= 9; index++) {
//             let person: Person =
//                 new Person("Full Name " + index, 20 + index);

//             people.push(person);
//         }

//         return (Promise.resolve(people));
//     }
// }

// @Component({
//     selector: 'my-app',
//     template: `
//     <h1>People List</h1>
//     <h3>Mode: {{mode}}</h3>
//     <ul>
//       <li *ngFor="let item of people">{{item.fullName}}</li>
//     </ul>
//     <p class="error" *ngIf="errorMessage">{{errorMessage}}</p>
//     `,
//     providers: [PersonService], // Note: خیلی مهم
// })
// export class AppComponent {
//     private people: Person[];
//     private errorMessage: string;
//     private mode: string = 'Promise';

//     public constructor(private personService: PersonService) {
//         // Note: Async!
//         this.personService.getPeople()
//             .then(result => this.people = result)
//             .catch(error => this.errorMessage = <any>error);
//     }
// }
// **************************************************

// **********
// در صورتی که بخواهیم پس از دریافت اطلاعات از کدهای دیگری استفاده نماییم
// **********
// public constructor(private personService: PersonService) {
// 	this.personService.getPeople()

// 	.then(result => {
// 		this.people = result;
// 	})

// 	.catch(error => {
//     this.errorMessage = <any>error
//   });
// }
// **********

// **************************************************
// import { Person } from './models/person';
// import { Component, Injectable } from '@angular/core';

// // File Name: mock-people.ts

// // در صورتی که بخواهیم به صورت ذیل اشیاء را ایجاد نماییم
// // باید به تمامی فیلدهای موجود مقداردهی کنیم
// export const PEOPLE: Person[] = [
//     { id: '1', active: true, fullName: 'Full Name 1', age: 21 },
//     { id: '2', active: false, fullName: 'Full Name 2', age: 22 },
//     { id: '3', active: true, fullName: 'Full Name 3', age: 23 },
//     { id: '4', active: false, fullName: 'Full Name 4', age: 24 },
//     { id: '5', active: true, fullName: 'Full Name 5', age: 25 },
//     { id: '6', active: false, fullName: 'Full Name 6', age: 26 },
//     { id: '7', active: true, fullName: 'Full Name 7', age: 27 },
//     { id: '8', active: false, fullName: 'Full Name 8', age: 28 },
//     { id: '9', active: true, fullName: 'Full Name 9', age: 29 },
// ];

// // import { PEOPLE } from './mock-people';

// @Injectable()
// export class PersonService {
//     getPeople(): Promise<Person[]> {
//         let people: Person[] = PEOPLE;

//         return (Promise.resolve(people));
//     }
// }

// @Component({
//     selector: 'my-app',
//     template: `
//     <h1>People List</h1>
//     <h3>Mode: {{mode}}</h3>
//     <ul>
//       <li *ngFor="let item of people">{{item.fullName}}</li>
//     </ul>
//     <p class="error" *ngIf="errorMessage">{{errorMessage}}</p>
//     `,
//     providers: [PersonService], // Note: خیلی مهم
// })
// export class AppComponent {
//     private people: Person[];
//     private errorMessage: string;
//     private mode: string = 'Promise';

//     public constructor(private personService: PersonService) {
//         this.personService.getPeople()
//             .then(result => this.people = result)
//             .catch(error => this.errorMessage = <any>error);
//     }
// }
// **************************************************

// **************************************************
// import { Person } from './models/person';
// import { Component, Injectable, OnInit } from '@angular/core';

// // File Name: mock-heroes.ts

// // در صورتی که بخواهیم به صورت ذیل اشیاء را ایجاد نماییم
// // باید به تمامی فیلدهای موجود مقداردهی کنیم
// export const PEOPLE: Person[] = [
//     { id: '1', active: true, fullName: 'Full Name 1', age: 21 },
//     { id: '2', active: false, fullName: 'Full Name 2', age: 22 },
//     { id: '3', active: true, fullName: 'Full Name 3', age: 23 },
//     { id: '4', active: false, fullName: 'Full Name 4', age: 24 },
//     { id: '5', active: true, fullName: 'Full Name 5', age: 25 },
//     { id: '6', active: false, fullName: 'Full Name 6', age: 26 },
//     { id: '7', active: true, fullName: 'Full Name 7', age: 27 },
//     { id: '8', active: false, fullName: 'Full Name 8', age: 28 },
//     { id: '9', active: true, fullName: 'Full Name 9', age: 29 },
// ];

// // import { PEOPLE } from './mock-heroes';

// @Injectable()
// export class PersonService {
//     getPeople(): Promise<Person[]> {
//         let people: Person[] = PEOPLE;

//         return (Promise.resolve(people));
//     }
// }

// @Component({
//     selector: 'my-app',
//     template: `
//     <h1>People List</h1>
//     <h3>Mode: {{mode}}</h3>
//     <ul>
//       <li *ngFor="let item of people">{{item.fullName}}</li>
//     </ul>
//     <p class="error" *ngIf="errorMessage">{{errorMessage}}</p>
//     `,
//     providers: [PersonService], // Note: خیلی مهم
// })
// export class AppComponent implements OnInit {
//     private people: Person[];
//     private errorMessage: string;
//     private mode: string = 'Promise';

//     public constructor(private personService: PersonService) {
//     }

//     ngOnInit() {
//         this.personService.getPeople()
//             .then(result => this.people = result)
//             .catch(error => this.errorMessage = <any>error);
//     }
// }
// **************************************************

// **************************************************
// import { Person } from './models/person';
// import { Component, Injectable, OnInit } from '@angular/core';

// import { Http, Response } from '@angular/http';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

// @Injectable()
// export class PersonService {
//     public constructor(private http: Http) {
//     }

//     private personUrl = './app/people.json';
//     // private personUrl = 'http://localhost:52173/fa-ir/Person/GetAll';

//     public getPeople(): Observable<Person[]> {
//         return (this.http.get(this.personUrl)
//             .map(this.extractData)
//             .catch(this.handleError));
//     }

//     private extractData(res: Response) {
//         let body = res.json();

//         return (body || {});
//         // return (body.data || {});
//     }

//     private handleError(error: Response | any) {
//         // In a real world app, you might use a remote logging infrastructure
//         let errMsg: string;

//         if (error instanceof Response) {
//             const body = error.json() || '';
//             const err = body.error || JSON.stringify(body);

//             errMsg =
//                 `${error.status} - ${error.statusText || ''} ${err}`;
//         } else {
//             errMsg =
//                 error.message ? error.message : error.toString();
//         }

//         //console.log(errMsg);
//         console.error(errMsg); // Note: مهم

//         return (Observable.throw(errMsg));
//     }
// }

// @Component({
//     selector: 'my-app',
//     template: `
//     <h1>People List</h1>
//     <h3>Mode: {{mode}}</h3>
//     <ul>
//       <li *ngFor="let item of people">{{item.fullName}}</li>
//     </ul>
//     <p class="error" *ngIf="errorMessage">{{errorMessage}}</p>
//     `,
//     providers: [PersonService], // Note: خیلی مهم
// })
// export class AppComponent implements OnInit {
//     private people: Person[];
//     private errorMessage: string;
//     private mode: string = 'Observable';

//     public constructor(private personService: PersonService) {
//     }

//     ngOnInit() {
//         this.personService.getPeople()
//             .subscribe(
//             result => this.people = result,
//             error => this.errorMessage = <any>error
//             );
//     }
// }
// **************************************************

// **************************************************
import { Person } from './models/person';
import { Component, Injectable, OnInit } from '@angular/core';

// Note: Headers, RequestOptions
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PersonService {
    private personUrl = 'http://localhost:52173/fa-ir/Person/Create';

    public constructor(private http: Http) {
    }

    public createNewPerson(person: Person): Observable<Person> {
        // alert('Full Name: ' + person.fullName + ', Age: ' + person.age);

        let headers =
            new Headers({ 'Content-Type': 'application/json' });

        let options =
            new RequestOptions({ headers: headers });

        return (this.http.post(this.personUrl, person, options)
            .map(this.extractData)
            .catch(this.handleError));
    }

    private extractData(res: Response) {
        alert('extractData');

        let body = res.json();

        // console.log(res);
        console.log(body);

        return (body || {});
        // return (body.data || {});
    }

    private handleError(error: Response | any) {

        alert('handleError');

        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;

        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);

            errMsg =
                `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg =
                error.message ? error.message : error.toString();
        }

        //console.log(errMsg);
        console.error(errMsg); // Note: مهم

        return (Observable.throw(errMsg));
    }
}

@Component({
    selector: 'my-app',
    template: `
    <h1>Create a new Person</h1>
    <h3>Mode: {{mode}}</h3>
    <hr />
    <button (click)="createPerson()">Create Person</button>
    <hr />
    The Created Person: {{thePerson?.fullName}}
    <hr />
    <p class="error" *ngIf="errorMessage">{{errorMessage}}</p>
    `,
    providers: [PersonService], // Note: خیلی مهم
})
export class AppComponent implements OnInit {
    public constructor(private personService: PersonService) {
    }

    private thePerson: Person;
    private errorMessage: string;
    private mode: string = 'Observable';

    ngOnInit() {
    }

    private createPerson(): void {
        this.thePerson =
            new Person('Dariush Tasdighi', 10);

        this.personService.createNewPerson(this.thePerson)
            .subscribe(
            result => this.thePerson = result,
            error => this.errorMessage = <any>error
            );
    }
}
// **************************************************
// **************************************************
// **************************************************

// Learning Routing

// Puting [<base href="/">] in <head> tag!

// **************************************************
// **************************************************
// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'my-home',
//   template: `
//     <h1>Home</h1>
//     `,
// })
// export class HomeComponent {
//   public constructor() {
//   }
// }

// @Component({
//   selector: 'my-about',
//   template: `
//     <h1>About</h1>
//     `,
// })
// export class AboutComponent {
//   public constructor() {
//   }
// }

// @Component({
//   selector: 'my-app',
//   template: `
//     <h1>Dariush Tasdighi</h1>

//     <nav>
//     <a routerLink="/home" routerLinkActive="active">Home</a>
//     |
//     <a routerLink="/about" routerLinkActive="active">About</a>
//     </nav>

//     <hr />

//     <router-outlet></router-outlet>
//     `,
// })
// export class AppComponent {
//   public constructor() {
//   }
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// @Component({
//   selector: 'my-home',
//   template: `
//     <h1>Home</h1>
//     `,
// })
// export class HomeComponent {
//   public constructor() {
//   }
// }

// @Component({
//   selector: 'my-about',
//   template: `
//     <h1>About</h1>
//     `,
// })
// export class AboutComponent {
//   public constructor() {
//   }
// }

// @Component({
//   selector: 'my-contact',
//   template: `
//     <h1>Contact</h1>
//     `,
// })
// export class ContactComponent {
//   public constructor() {
//   }
// }

// @Component({
//   selector: 'my-page-not-found',
//   template: `
//     <h1>Page Not Found!</h1>
//     `,
// })
// export class PageNotFoundComponent {
//   public constructor() {
//   }
// }

// import 'rxjs/add/operator/switchMap';
// import { OnInit, HostBinding } from '@angular/core';
// import { Router, ActivatedRoute, Params } from '@angular/router';

// @Component({
//   template: `
//   <h2>Person Details</h2>
//   Person Id: {{passedId}}
//   <button type="button" (click)="gotoHome()">Goto Home</button>
//   `,
// })
// export class PersonDetailComponent implements OnInit {
//   private passedId: string;

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//   ) {
//   }

//   ngOnInit() {
//     this.route.params
//       // (+) converts string 'id' to a number
//       .switchMap((params: Params) => this.passedId = params['id']);
//   }

//   gotoHome() {
//     this.router.navigate(['/home', { id: this.passedId }]);
//   }
// }

// @Component({
//   selector: 'my-app',
//   template: `
//     <h1>Dariush Tasdighi</h1>

//     <nav>
//         <a routerLink="/home" routerLinkActive="active">Home</a>
//         |
//         <a routerLink="/about" routerLinkActive="active">About</a>
//         |
//         <a routerLink="/contact" routerLinkActive="active">Contact</a>
//         |
//         <a routerLink="/darivari" routerLinkActive="active">Dari Vari</a>
//         |
//         <a routerLink="/person/10" routerLinkActive="active">Person Details (10)</a>
//     </nav>

//     <hr />

//     <router-outlet></router-outlet>
//     `,
// })
// export class AppComponent {
//   public constructor() {
//   }
// }
// **************************************************
// **************************************************
// **************************************************

// Learning Pipe(s)

// **************************************************
// **************************************************
// **************************************************
// import { Component } from '@angular/core';

// import { Person } from './models/person';
// import { IPerson } from './models/interfaces';

// @Component({
//     selector: 'my-app',
//     template: `
//     <ul>
//       <li *ngFor="let item of people">
//         Id: {{item.id}},
//         Age: {{item.age}},
//         Full Name: {{item.fullName}},
//         Active: <input type="checkbox" [(ngModel)]="item.active" disabled />
//       </li>
//     </ul>
//     `
// })
// export class AppComponent {
//     private people: IPerson[];

//     public constructor() {
//         this.people = [];

//         for (let index: number = 1; index <= 9; index++) {
//             let person: Person = new Person();

//             person.age = 20 + index;
//             person.id = index.toString();
//             person.active = (index % 2 === 0);
//             person.fullName = "Full Name (" + index + ")";

//             this.people.push(person);
//         }
//     }
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// import { Person } from './models/person';
// import { IPerson } from './models/interfaces';

// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//     name: 'personPipe'
// })
// export class PersonPipe implements PipeTransform {
//     transform(allPeople: IPerson[]) {
//         return (allPeople.filter(person => person.active).sort(person => person.age));
//     }
// }

// @Component({
//     selector: 'my-app',
//     template: `
//     <ul>
//       <li *ngFor="let item of people | personPipe">
//         Id: {{item.id}},
//         Age: {{item.age}},
//         Full Name: {{item.fullName}},
//         Active: <input type="checkbox" [(ngModel)]="item.active" disabled />
//       </li>
//     </ul>
//     `
// })
// export class AppComponent {
//     private people: IPerson[];

//     public constructor() {
//         this.people = [];

//         for (let index: number = 1; index <= 9; index++) {
//             let person: Person = new Person();

//             person.age = 20 + index;
//             person.id = index.toString();
//             person.active = (index % 2 === 0);
//             person.fullName = "Full Name (" + index + ")";

//             this.people.push(person);
//         }
//     }
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// import { Person } from './models/person';
// import { IPerson } from './models/interfaces';

// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//     name: 'personPipe'
// })
// export class PersonPipe implements PipeTransform {
//     transform(allPeople: IPerson[], justActive: boolean) {
//         if (justActive) {
//             return (allPeople.filter(person => person.active).sort(person => person.age));
//         }
//         else {
//             return (allPeople.sort(person => person.age));
//         }
//     }
// }

// @Component({
//     selector: 'my-app',

//     template: `
//     <h3>Search</h3>
//     Just Active: <input type="checkbox" [(ngModel)]="justActive" />
//     <ul>
//       <li *ngFor="let item of people | personPipe : justActive">
//         Id: {{item.id}},
//         Age: {{item.age}},
//         Full Name: {{item.fullName}},
//         Active: <input type="checkbox" [(ngModel)]="item.active" disabled />
//       </li>
//     </ul>
//     `
// })
// export class AppComponent {
//     private people: IPerson[];
//     private justActive: boolean;

//     public constructor() {
//         this.people = [];
//         this.justActive = false;

//         for (let index: number = 1; index <= 9; index++) {
//             let person: Person = new Person();

//             person.age = 20 + index;
//             person.id = index.toString();
//             person.active = (index % 2 === 0);
//             person.fullName = "Full Name (" + index + ")";

//             this.people.push(person);
//         }
//     }
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// import { Person } from './models/person';
// import { IPerson } from './models/interfaces';

// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//     name: 'personPipe'
// })
// export class PersonPipe implements PipeTransform {
//     transform(allPeople: IPerson[], justActive: boolean, fullName: string) {
//         if (justActive) {
//             if ((fullName === undefined) || (fullName === null)) {
//                 return (allPeople.filter(person => person.active).sort(person => person.age));
//             }
//             else {
//                 return (allPeople.filter(person => person.active && person.fullName.toUpperCase().match(fullName.toUpperCase())).sort(person => person.age));
//             }
//         }
//         else {
//             if ((fullName === undefined) || (fullName === null)) {
//                 return (allPeople.sort(person => person.age));
//             }
//             else {
//                 return (allPeople.filter(person => person.fullName.toUpperCase().match(fullName.toUpperCase())).sort(person => person.age));
//             }
//         }
//     }
// }

// @Component({
//     selector: 'my-app',

//     template: `
//     <h3>Search</h3>
//     Just Active: <input type="checkbox" [(ngModel)]="justActive" />
//     <br />
//     Full Name: <input type="text" [(ngModel)]="fullName" />
//     <hr />
//     <ul>
//       <li *ngFor="let item of people | personPipe : justActive : fullName">
//         Id: {{item.id}},
//         Age: {{item.age}},
//         Full Name: {{item.fullName}},
//         Active: <input type="checkbox" [(ngModel)]="item.active" disabled />
//       </li>
//     </ul>
//     `
// })
// export class AppComponent {
//     private fullName: string;
//     private people: IPerson[];
//     private justActive: boolean;

//     public constructor() {
//         this.people = [];
//         this.fullName = null;
//         this.justActive = false;

//         for (let index: number = 1; index <= 9; index++) {
//             let person: Person = new Person();

//             person.age = 20 + index;
//             person.id = index.toString();
//             person.active = (index % 2 === 0);
//             person.fullName = "Full Name (" + index + ")";

//             this.people.push(person);
//         }
//     }
// }
// **************************************************

// **************************************************
// import { Component } from '@angular/core';

// import { Person } from './models/person';
// import { IPerson } from './models/interfaces';

// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//     name: 'dtxSort'
// })
// export class DtxSortPipe implements PipeTransform {
//     transform(data: any[], name: string) {
//         return (data.sort(current => current[name]));
//     }
// }

// @Component({
//     selector: 'my-app',

//     template: `
//     <ul>
//       <li *ngFor="let item of people | dtxSort : sort">
//         Id: {{item.id}},
//         Age: {{item.age}},
//         Full Name: {{item.fullName}},
//         Active: <input type="checkbox" [(ngModel)]="item.active" disabled />
//       </li>
//     </ul>
//     `
// })
// export class AppComponent {
//     public constructor() {
//         this.people = [];
//         this.sort = 'age';

//         for (let index: number = 1; index <= 9; index++) {
//             let person: Person = new Person();

//             person.age = 30 - index;
//             person.id = index.toString();
//             person.active = (index % 2 === 0);
//             person.fullName = "Full Name (" + index + ")";

//             this.people.push(person);
//         }
//     }

//     private sort: string;
//     private people: IPerson[];
// }
// **************************************************
// **************************************************
// **************************************************

// Learning Forms

// **************************************************
// **************************************************
// **************************************************
// // https://github.com/yuyang041060120/ng2-validation

// import { Component } from '@angular/core';

// import { Person } from './models/person';
// import { IPerson } from './models/interfaces';

// @Component({
//     selector: 'my-app',
//     template: `
// {{diagnostic}}

// <form (ngSubmit)="onSubmit()" #personForm="ngForm" autocomplete="off" novalidate>

//     <div class="form-horizontal">

//         <div class="form-group">
//             <label for="fullName" class="control-label col-sm-3">Full Name</label>
//             <div class="col-sm-9">
//                 <input type="text" id="fullName" name="fullName" #fullName="ngModel" [(ngModel)]="person.fullName" class="form-control" required minlength="3">
//                 <div *ngIf="fullName.invalid && fullName.dirty" class="alert alert-danger">
//                     <span class="help-block" *ngIf="fullName?.errors?.required">Full Name is required!</span>
//                     <span class="help-block" *ngIf="fullName?.errors?.minlength">The full name value should be atleast 3 chars!</span>
//                 </div>
//             </div>
//         </div>

//         <div class="form-group">
//             <label for="age" class="control-label col-sm-3">Age</label>
//             <div class="col-sm-9">
//                 <input type="number" id="age" name="age" #age="ngModel" [(ngModel)]="person.age" class="form-control" required>
//                 <div *ngIf="age.invalid && age.dirty" class="alert alert-danger">
//                     <span class="help-block" *ngIf="age?.errors?.required">Age is required!</span>
//                 </div>
//             </div>
//         </div>

//         <div class="row form-group">
//             <div class="col-sm-9 col-sm-offset-3">
//                 <button type="submit" class="btn btn-success" [disabled]="!personForm.form.valid">Create</button>
//                 <button type="button" class="btn btn-default" (click)="personForm.reset()">Reset</button>
//             </div>
//         </div>

//     </div>

// </form>
// `
// })
// export class AppComponent {
//     private person: IPerson;
//     private submitted: boolean;

//     public constructor() {
//         this.submitted = false;
//         this.person = new Person();
//     }

//     private onSubmit(): void {
//         this.submitted = true;

//         alert("Done!");
//     }

//     // TODO: Just For Testring!
//     private get diagnostic() {
//         return (JSON.stringify(this.person));
//     }
// }
// **************************************************
// **************************************************
// **************************************************

// http://www.adonespitogo.com/articles/angular-2-extending-http-provider/