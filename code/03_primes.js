function getPrimes(min, max) {
    function isPrime(num) {
        if (num < 2) return false;
        let sqrt = Math.sqrt(num);
        
        for (let i = 2; i <= sqrt; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    const primeNumbers = [];
    for (let i = min; i <= max; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
    }

    return primeNumbers;
}

//test1
console.log(getPrimes(11, 20)); // array[11, 13, 17, 19]
