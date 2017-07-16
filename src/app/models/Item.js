"use strict";
// **************************************************
// import { IItem } from './interfaces';
Object.defineProperty(exports, "__esModule", { value: true });
var Item = (function () {
    function Item(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }
    Item.prototype.plus = function () {
        if (this.count < 10) {
            this.count++;
        }
    };
    Item.prototype.minus = function () {
        if (this.count > 0) {
            this.count--;
        }
    };
    return Item;
}());
exports.Item = Item;
// **************************************************
// **************************************************
// import { IItem } from './interfaces';
// export class Item implements IItem {
//     public constructor(public name: string, public price: number, public count: number) {
//     }
// }
// **************************************************
//# sourceMappingURL=item.js.map