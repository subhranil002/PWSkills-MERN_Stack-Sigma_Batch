const path = require("path");

console.log(path.sep); // \

console.log(process.env.PATH); // Will show all the interconnected paths

console.log(path.delimiter); // ;

const currentFilePath = __filename;

console.log(currentFilePath); // c:\Users\subhr\Desktop\GitHub\PWSkills-MERN_Stack-Sigma_Batch\10115. 07-06-2023_NodeJS(Path Module)\2. server.js

console.log(__dirname); // c:\Users\subhr\Desktop\GitHub\PWSkills-MERN_Stack-Sigma_Batch\10115. 07-06-2023_NodeJS(Path Module)

let baseName = path.basename(currentFilePath);

console.log(baseName); // 2. server.js

let baseNameWithoutExtention = path.basename(currentFilePath, ".js");

console.log(baseNameWithoutExtention); // 2. server

let dirName = path.dirname(currentFilePath);

console.log(dirName); // c:\Users\subhr\Desktop\GitHub\PWSkills-MERN_Stack-Sigma_Batch\10115. 07-06-2023_NodeJS(Path Module)

console.log(path.extname(currentFilePath)); // .js

let pathToFile = path.format({
    dir: "./public_html/home",
    base: "index.html",
});

console.log(pathToFile); // ./public_html/home\index.html

console.log(path.isAbsolute(currentFilePath)); // true

console.log(path.isAbsolute("/index.html")); // true

console.log(path.isAbsolute("./index.html")); // false

console.log(path.isAbsolute("../index.html")); // false

let pathToDir = path.join("/home", "js", "dist", "index.js");

console.log(pathToDir); // \home\js\dist\index.js

console.log(path.parse(currentFilePath));
// {
//     root: 'c:\\',
//     dir: 'c:\\Users\\subhr\\Desktop\\GitHub\\PWSkills-MERN_Stack-Sigma_Batch\\10115. 07-06-2023_NodeJS(Path Module)',
//     base: '2. server.js',
//     ext: '.js',
//     name: '2. server'
// }

console.log(path.relative("/home/user/config", "/home/user/js")); // ..\js

console.log(path.resolve()); // C:\Users\subhr\Desktop\GitHub\PWSkills-MERN_Stack-Sigma_Batch

console.log(path.normalize("/node//user//home//js")); // \node\user\home\js
