var a = 'U';  // global scope
let b = 'o';  // block scope, Local scope
const c = 'U'; // constant, can't be changed & Local Scope

a = 'O';
b = 'w';

{
    var d = 'Z' // This can be use anywhere
    let e = 'Y'; // this can be use only in this block
    const f = 'X'; // constant, can't be changed & can be only use in this block
    console.log(a,b,c,d,e,f);
}
console.log(a,b,c,d);