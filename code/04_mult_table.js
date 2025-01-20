function multiplicationTable(n) {
    process.stdout.write('    |');
    for (let i = 1; i <= n; i++) {
        process.stdout.write(`${i.toString().padStart(3)} `);
    }
    console.log('\n' + '-'.repeat(4 * n + 4));
 
    for (let i = 1; i <= n; i++) {
        process.stdout.write(`${i.toString().padStart(3)} |`);
        for (let j = 1; j <= n; j++) {
            process.stdout.write(`${(i * j).toString().padStart(3)} `);
        }
        console.log();
    }
}

//test
multiplicationTable(5);
