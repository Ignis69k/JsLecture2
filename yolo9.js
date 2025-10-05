let data1 = 50
let data2 = 'Owo'
console.log(data1+' UwU '+data2+' '+(10*20)); // No auto Spacebar
console.log(data1,'UwU',data2,(10 * 20)); //Auto Spacebar
console.log(`${data1} UwU ${data2} ${10*20}`); //Also Auto Spacebar but better? 

// break,continue in loop

for (let yalo = 1; yalo <= 5; yalo++) {
    if (yalo == 3) {
        break;
    }
    console.log(yalo, 'object');
}
console.log('');
for (let yalo1 = 1; yalo1 <= 5; yalo1++) {
    if (yalo1 == 3) {
        continue
    }
    console.log(yalo1, 'object1');
}