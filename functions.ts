function less(a: number, b: number): number {
  return a - b;
}

function sayHello(name: string): void {
  console.log(` Hello, ${name}`);
}

function logAndThrow(message: string): never {
  console.log(message);
  throw new Error(message);
}
