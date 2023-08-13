const os = require("os");

console.log("CPU Architecture: ", os.arch()); // CPU Architecture: x64

console.log("Free memory: ", os.freemem()); // Free memory:  2132652032

console.log("Total memory: ", os.totalmem()); // Total memory:  8245452800

console.log("Network interfaces: ", JSON.stringify(os.networkInterfaces())); // Will show all the network interfaces

console.log("OS default temp dir: ", os.tmpdir()); // OS default temp dir:  C:\Users\subhr\AppData\Local\Temp

console.log("Endianess: ", os.endianness()); // Endianess:  LE

console.log("Host name: ", os.hostname()); // Host name:  Subhranil

console.log("OS type: ", os.type()); // OS type:  Windows_NT

console.log("OS platform: ", os.platform()); // OS platform:  win32

console.log("OS release: ", os.release()); // OS release:  10.0.22621