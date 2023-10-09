export function Counter(char: String, List: String): number {
    return List.split('').filter((item) => item === char).length;
}