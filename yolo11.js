// Loop with Object

let owoObj = {
    name: "SevenSea",
    age: 10,
    isStudent: true,
    address: {
        providance: "ProfendGurdian",
        contry:"underworld",
    },
    Eatnable:["Beacon","Streak","Well-Fed"]
}

//
console.log(owoObj.address.providance);
console.log(owoObj.Eatnable[2]);
owoObj.address.contry = "Hallowed"
console.log(owoObj.contry);
console.log(owoObj);


for (let key in owoObj) {
    console.log(key);
}

for (let [key,value] in Object.entries(owoObj)) {
    console.log(key);
    console.log(value);
}

for (let value of Object.values(owoObj)){
    console.log(value);
}

for (let key of Object.keys(owoObj)){
    console.log(key);
}