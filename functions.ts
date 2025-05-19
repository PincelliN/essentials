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

function performJobs(cb: () => void) {
  cb();
}

function performJobs2(cb: (element: string) => void) {
  cb("element");
}

type userJob = {
  name: string;
  lastName: string;
  callback: () => void;
};
