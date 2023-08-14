const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) => {
    console.log(`Thanks For Subscribing to ${channelName}`);
};

eventEmitter.addListener("subscribe", subscribeMessage);

console.log("Calling event listner before removing the event."); // Calling event listner before removing the event.
eventEmitter.emit("subscribe", "College Wallah"); // Thanks For Subscribing to College Wallah

console.log("Calling event listner after removing the event."); // Calling event listner after removing the event.
eventEmitter.removeListener("subscribe", subscribeMessage);

eventEmitter.emit("subscribe", "College Wallah"); // No Response
