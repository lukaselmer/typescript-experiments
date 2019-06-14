export const iAmAModule = true;

const colors = ['red', 'blue', 'green'] as const;

type Color = typeof colors extends readonly (infer R)[] ? R : never;
const color: Color = 'green';
console.log(color);

type EnumFromArray<T> = T extends readonly (infer R)[] ? R : never;
type Color2 = EnumFromArray<typeof colors>;
const color2: Color2 = 'blue';
console.log(color2);

const name = 'bla';
type Color3 = EnumFromArray<typeof name>;
let color3: Color3;
// color3 = null; Error: Type 'null' is not assignable to type 'never'
console.log(color3);
