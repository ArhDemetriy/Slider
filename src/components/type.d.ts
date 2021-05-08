type XOR<T1 extends { [k in string]: any }, T2 extends { [k in string]: any }> =
  | ({ [k in keyof T1]: T1[k] } & { [k in Exclude<(keyof T2), (keyof T1)>]?: never })
  | ({ [k in keyof T2]: T2[k] } & { [k in Exclude<(keyof T1), (keyof T2)>]?: never })
interface Destructible {
  destroy(): void;
}
type ArrayOfDestructible = [() => void, ...Array<Destructible>];
type AllArrayOfDestructible = Array<ArrayOfDestructible>;

export {
  XOR,
  Destructible,
  ArrayOfDestructible,
  AllArrayOfDestructible,
};
