export function checkout(itemList: string): number {
    let total = 0;
    for (const item of itemList) {
        if(item === "A") total += 50;
        if(item === "B") total += 30;
        if(item === "C") total += 20;
    }
    return total;
}