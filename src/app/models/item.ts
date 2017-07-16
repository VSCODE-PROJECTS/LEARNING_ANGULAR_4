// **************************************************
// import { IItem } from './interfaces';

// export class Item implements IItem {
//     public constructor(name: string, price: number, count: number) {
//         this.name = name;
//         this.price = price;
//         this.count = count;
//     }

//     public name: string;
//     public price: number;
//     public count: number;
// }
// **************************************************

// **************************************************
import { IItem } from './interfaces';

export class Item implements IItem {
    public constructor(name: string, price: number, count: number) {
        this.name = name;
        this.price = price;
        this.count = count;
    }

    public name: string;
    public price: number;
    public count: number;

    public plus(): void {
        if (this.count < 10) {
            this.count++;
        }
    }

    public minus(): void {
        if (this.count > 0) {
            this.count--;
        }
    }
}
// **************************************************

// **************************************************
// import { IItem } from './interfaces';

// export class Item implements IItem {
//     public constructor(public name: string, public price: number, public count: number) {
//     }
// }
// **************************************************
