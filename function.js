let arg = [3, 10, 8, 7, 6];

for (let i = 0; i < arg.length; i++) {
    console.log(arg[i]);
}


let first = function (a, b, c = 1) {
    if (a == c) {
        return ("Введіть різні значення a, c");

    } else if (b != c) {
        return b + c;

    } else {
        return a + b + c
    }
}
console.log(first(3, 1, 1));



function second(a, b, c) {
    return a * b * c;
}
console.log(second(5, 6, 2));