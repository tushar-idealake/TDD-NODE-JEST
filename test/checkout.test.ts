import { checkout } from "../src/checkout";

describe('checkout new test', () => {
    it('Should return 0 when nothing is passed', () => {
        expect(checkout("")).toBe(0);
    });
    it('Should return 50 when A is passed', () => {
        expect(checkout("A")).toBe(50);
    });
    it('Should return 30 when B is passed', () => {
        expect(checkout("B")).toBe(30);
    });
    it('Should return 20 when C is passed', () => {
        expect(checkout("C")).toBe(20);
    });
    it('Should return 40 when CC is passed', () => {
        expect(checkout("CC")).toBe(40);
    });
    it('Should return 70 when AC is passed', () => {
        expect(checkout("AC")).toBe(70);
    });
});

