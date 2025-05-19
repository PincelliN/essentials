function generateError(msg?: string) {
  throw new Error(msg);
}

type UserOptional = {
  name: string;
  age: number;
  role?: "admin" | "guest";
};
