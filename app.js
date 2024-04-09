// const readline = require('readline')
const fs = require('fs');

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
// const fs = require('fs');

// let textIn = fs.readFileSync('./files/input.txt','utf-8');
// console.log(textIn)

// let content = `Date read from input.txt: ${textIn} \nDate Created ${new Date()}`
// fs.writeFileSync('./files/output.txt', content);

fs.readFile('./files/start.txt','utf-8',(error1,data1)=>{
    console.log(data1);
    fs.readFile(`./files/${data1}.txt`,'utf-8',(error2,data2)=>{
        console.log(data2);
        fs.readFile('./files/append.txt','utf-8',(error3,data3)=>{
            console.log(data3);
            fs.writeFile('./files/output.txt',`${data2}\n\n${data3}\n\nDate created ${new Date()}`,()=>{
                console.log('File writen successfully');
            })
        })
    })
})

console.log('Reading file...');