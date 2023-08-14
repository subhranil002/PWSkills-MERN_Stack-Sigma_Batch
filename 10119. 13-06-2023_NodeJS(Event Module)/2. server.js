const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayMyName", () => {
    console.log("Subhranil here");
});

event.emit("sayMyName");

event.on("checkPage", (sc, msg) => {
    console.log(`Status code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage", 200, "ok");
