type Colored = { color: string };
type MaybeColored = { color: string | undefined };

const red: Colored = { color: 'red' };
const discolored: MaybeColored = red;
discolored.color = undefined;

console.log(red.color);