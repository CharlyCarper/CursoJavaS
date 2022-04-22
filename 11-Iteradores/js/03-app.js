//fisbus

// 3 6 9 12 FIZZ
// 5 10 15 20 BUZZ
// 15 30 45 60 FIZZBUZZ

for (let i = 1; i < 100; i++) {

    if (i % 15 === 0) {

        console.log(`Numero: ${i} FIZZBUZZ`)
        continue;
    } else if (i % 5 === 0) {

        console.log(`Numero: ${i} BUZZ`)
        continue;
    } else if (i % 3 == 0) {

        console.log(`Numero: ${i} FIZZ`)
        continue;
    }

    console.log(`Numero: ${i}`)

}