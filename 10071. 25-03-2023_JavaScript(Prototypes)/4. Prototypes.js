let myHeros = ["thor", "spiderman"];

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidermanPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    },
};

Object.prototype.Subh = function () {
    console.log(`Subh is present in all objects`);
};

console.log(myHeros.Subh()); // Subh is present in all objects
console.log(heropower.Subh()); // Subh is present in all objects

Array.prototype.heySubh = () => {
    console.log(`Subh says hi`);
};

console.log(myHeros.heySubh()); // Subh says hi
// console.log(heropower.heySubh()); // TypeError: heropower.heySubh is not a function

String.prototype.trueLength = function () {
    console.log(`True length is ${this.trim().length}`);
};

"subhranil        ".trueLength(); // True length is 9
"hey subh       ".trueLength(); // True length is 8

// Inheritance

const User = {
    name: "top name",
    email: "top@gmail.com",
};

const Teacher = {
    makeVideos: true,
};

const TeachingSupport = {
    isAvailable: false,
};

const TeachingAssistant = {
    makeAssignment: "JS Assignment",
    isFulltime: true,
};

console.log(Teacher.isFulltime); // undefined

Object.setPrototypeOf(Teacher, TeachingAssistant);

console.log(Teacher.isFulltime); // true
