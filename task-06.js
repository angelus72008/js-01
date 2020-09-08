let input;
let total = 0;
let inputAdd = 0;
input = prompt();
for (let index = 0; input !== null; index++) {
  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    input = prompt();
  } else {
    total += +input;
    input = prompt();
  }
}
alert(`Общая сумма чисел равна ${total}`);