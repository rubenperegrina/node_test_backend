export const reverseText = (text: string) => {
let result : string = text.split('').reverse().join('').replace(/[aeiou]/g, l => l.toUpperCase());
return { data: { result } };
}