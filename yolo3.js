console.log("First : " + 20 % 2);
console.log("Second : " + 2 % 20);
console.log("Third : " + 0 % 500);

// ==,!= สนใจ data type
console.log("ignore data type : ", 111 == '111');

// ===,!== ไม่สนใจ data type
console.log("not ignore data type : ", 111 === '111');

// String Compare
console.log('Sombat' < 'Somjai');
console.log('Bangna' >= 'Bangpoo');

// logical operator !(Not) && (And) || (Or)
// Only use True/False and Result Will Only be True/False
console.log(!true);   // false
console.log(!false);  // true
console.log(true && true);   //true
console.log(true && false);  //false
console.log(false && true);  //false
console.log(false && false); //false

console.log(false || false); //false
console.log(false || true);  //true
console.log(true || false);  //true
console.log(true || true); //true

// Ternary Operator เงื่อนไข ? ทำเมื่อเป็นจริง : ทำเมื่อเป็นเท็จ
// condition ? true : false
let datab = 100 % 30 == '0' ? 'Yes' : 'No';
console.log(datab);

// increment operator
// ++ เพิ่มตัวมันเองทีละ 1 / -- ลดตัวมันเองทีละ 1
let dataab = 10;
console.log(dataab); // 10
dataab++; // 11
++dataab; // 12
dataab++; // 13
console.log(dataab); // 13

// Nullist Operator

let ww = null
let oo
let ww1 = 'OwO'
console.log('-----------------------');
console.log(ww ?? 'uwu'); // if null define it as uwu //or the value inside the semi-colon
console.log(oo ?? 'yalooo'); // like above too
console.log(ww1 ?? 'yahalooo'); // this is not null