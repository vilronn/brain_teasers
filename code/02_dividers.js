function commonDivisors(numbers) {
    let div = [];
    let sqrt = Math.sqrt(numbers[0])

    for (let i = 1; i <= sqrt ; i++) {
        if (numbers[0] % i === 0) {
            div.push(i);
        }
    let lastDiv = div[div.lenght-1];

        for (let i = 1; i <= numbers.length; i++) {
            for (let d = 2; d <= lastDiv; d++) {
                if (numbers[i] % div[d] !== 0) {
                    div.splice(1, div[d])
                }
            }
        }
    }

return div;
}

//test1
console.log(commonDivisors([42, 12, 18]));
