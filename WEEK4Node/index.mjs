import fs from "fs";
import { Command, program } from "commander";
const command = new Command();


//just for knowledge of cli
program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0')

//SINGLE COMMAND we Can give multiple
program.command('count')
.description('Count the number of lines in a file')
.argument('<file>', 'file to count')
.action((file)=>{
    fs.readFile("text.txt","utf-8",(err,data)=>{
        if(err){
            console.log(err);
        }else{
            const lines = data.split('\n').length;
            console.log(`there ${lines} only ${file}`); 
        }
    })
})

program.parse();

