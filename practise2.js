  
// Global scope 
let courseName= "JavaScript";

function practiceScope() {
    // Function scope
    let topic= "Variables";
    console.log(courseName + " _ " + topic);
}
if (true) {
    // Block scope
    let detail= "Exploring scopes";
    console.log(detail);
}

//Global scope

var globalVar= "Global var";
let globalLet= "Global let";
const globalConst= "Global const"

function exampleScope()  {
    console.log(globalVar);
    console.log(globalLet);
    console.log(globalConst);
}
//Function scope

var funcVar= "Function var";
let funcLet= "Function let";
const funcConst= "Function const";
console.log("inside function");
console.log(funcVar);
console.log(funcLet);
console.log(funcConst);

if (true)
    //Block scope

var blockVar= "Block var";
let blockLet= "Block let";
const blockConst= "Block const";
console.log("inside function");
console.log(blockVar);
console.log(blockLet);
console.log(blockConst);



