const readline = require('readline')
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// rl.question("Please enter the name:",(name)=>{
//     console.log("you entered: "+name);
//     rl.close();
// })
// rl.on('close',()=>{
//     console.log("Inter face closed");
//     process.exit(0);
// })


//we can not use javascript files read and write but
//when we use the javascritp in node.js.node js provides 
//some apis which we can use to read and write files
const fs = require('fs');

let textIn = fs.readFileSync('./files/input.txt','utf-8');
console.log(textIn)

let content = `Date read from input.txt: ${textIn} \nDate Created ${new Date()}`
fs.writeFileSync('./files/output.txt', content);
