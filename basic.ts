let username: string;

username = "Nic";

function add(a: number, b = 5) {
  return a + b;
}

add(10); // 15 OK
add(10, 6); // 16 OK
/*
Error
add('10')
add(10,'6')

*/
