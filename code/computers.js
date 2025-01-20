function howManyComps(n) {
    if (n % 10 === 1 && n % 100 !== 11) {
        return `${n} компьютер`;
    } else if (n % 10 > 1 && n % 10 < 5 && (n % 100 < 5 || n % 100 > 21)) {
        return `${n} компьютера`;
    } else {
        return `${n} компьютеров`;
    }
}

//test1
console.log(howManyComps(5));  //"5 компьютеров"
//test2
console.log(howManyComps(31));  // "31 компьютер"
//test3
console.log(howManyComps(111)); //"111 компьютеров"
