// Loop with array

let uwuArr = [
    312, //index 0
    "maidainon",
    true,
    777,
    { name: "wat?", age: 10 },
    [562, 440, 672] //index 5
]

console.log(uwuArr[1]);
console.log(uwuArr[5][1]);
console.log(uwuArr[4].name);
uwuArr[1] = "Yolooo" // changing Array index 1 to Yolo
console.log(uwuArr[1]);

uwuArr.forEach((atem, index) => {
    console.log(atem);
    console.log(index);
});

uwuArr.map((atem, index) => {
    console.log(atem);
    console.log(index);
});

for (let awa of uwuArr) {
    console.log(awa);
}
for (let index in uwuArr) {
    console.log(index);
}