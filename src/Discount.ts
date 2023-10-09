import { ItemType } from "./item";
import { Counter } from "./utils/_counter";

export class Discount {
    constructor(private itemType: ItemType, private quantity: number, private discount: number) {}
    calculateDiscount(itemList: String): number {
        return Math.trunc(Counter(this.itemType, itemList) / this.quantity) * this.discount;
    }
}