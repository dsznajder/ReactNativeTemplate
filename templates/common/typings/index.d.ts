declare type FixMe = any;
declare type ToDo = any;
declare type Inexpressible = any;
declare type NotWorthIt = any;
declare type Maybe<T> = T | null;

declare module '*.png' {
  const content: number;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}
