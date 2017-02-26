var n = Number(prompt('Введіть номер числа'));

function fib(n) {
    var numbers = [];
    numbers[0] = 1;
    numbers[1] = 1;
    for (var i = 2; i < n; i++) {
        numbers[i] = numbers[i - 1] + numbers[i - 2];
    }
    return numbers[n - 1];
}
document.write(fib(n));
