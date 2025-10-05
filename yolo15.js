//3.have parameter, has return

function snum(nm1,nm2) {
    return nm1 + nm2
}

function huh(frname,lsname) {
    console.log(`hello ${frname} ${lsname}`);
    return `sayonara ${frname} ${lsname}`
}

console.log(`5 + 8 = ${snum(5, 8)}`); //any ${function} that has return must be writted in ``
console.log(huh("wut","zxz"));
