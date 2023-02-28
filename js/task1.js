const target = Number( prompt("Введіть число до якого порахувати суму"));
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
}
alert(`${sum}`)

    