do {
    var x = +prompt('Введите количества ступенек')
} while (x === 0);

if (isNaN(x)) {
    x = 5
}

do {
    var y = prompt('Введите символ отступов')
} while (y == '');

do {
    var z = prompt('Введите конечный символ')
} while (z == '');

for (let i = 1; i < x; i++) {
    console.log(z);
    z = y + z
}
console.log(z);
