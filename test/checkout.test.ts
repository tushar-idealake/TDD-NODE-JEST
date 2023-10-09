import { Discount } from "../src/Discount";
import { Store } from "../src/checkout";
import { ItemType } from "../src/item";

describe('checkout new test', () => {
    
    const discountA = new Discount(ItemType.A, 3, 15);
    const discountB = new Discount(ItemType.B, 2, 10);
    const store = new Store([discountA, discountB])
    it('Should return 0 when nothing is passed', () => {
        expect(store.checkout("")).toBe(0);
    });
    it('Should return 50 when A is passed', () => {
        expect(store.checkout("A")).toBe(50);
    });
    it('Should return 30 when B is passed', () => {
        expect(store.checkout("B")).toBe(30);
    });
    it('Should return 20 when C is passed', () => {
        expect(store.checkout("C")).toBe(20);
    });
    it('Should return 40 when CC is passed', () => {
        expect(store.checkout("CC")).toBe(40);
    });
    it('Should return 70 when AC is passed', () => {
        expect(store.checkout("AC")).toBe(70);
    });
    it('Should apply discount when AAA is passed', () => {
        expect(store.checkout("AAA")).toBe(135);
    });
    it('Should apply discount when AAAAAAAA is passed', () => {
        expect(store.checkout("AAAAAAAA")).toBe(370);
    });
    it('Should apply discount when 2Bs is passed', () => {
        expect(store.checkout("BB")).toBe(50);
    });
});

