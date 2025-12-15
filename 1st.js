function addNumbers() {
  let a = prompt("Enter first number:");
  if (a === null) return;

  let b = prompt("Enter second number:");
  if (b === null) return;

  a = Number(a);
  b = Number(b);
  console.log(a);
  console.log(b);

  let sum = a + b;

  document.getElementById("result").innerText =
    "Result: " + sum;
}
