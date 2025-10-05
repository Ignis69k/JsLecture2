// Arrow function หรือ function Arrow aka.Lambda

// name function Arrow
// Must call like function
let dfunc = () => {
    console.log(786234);
}

// Anonymous Function Arrow
// Must call like function and must have something to return
let dfunc2 = (p1, p2) => {
    console.log(p1, p2);
    return 'whatttt'
}

dfunc()
console.log(dfunc2(7, 24));

// กรณี parameter มีตัวเดียว ไม่จำเป็นต้องใช้ ()
let oneparam = param_a => {
    console.log(param_a);
}

// กรณี คำสั่งการทำงานมีคำสั่งเดียว ไม่จำเป็นต้องใช้ {}
let oneparam2 = param_a => console.log(param_a);

let inf = () => {
    return 534;
}

//กรณีที่คำสั่งการทำงานมีคำสั่งเดียว และเป็น return หากไม่ใช้ {} ต้องไม่มี return
let inf1 = () => 342