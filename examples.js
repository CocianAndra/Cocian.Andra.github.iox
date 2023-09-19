function variablesExample() {
    console.log(true);
console.info("page loaded");
console.debug(5-2);
console.warn(10-2);
console.error("hello" + "there");

var employed = false;
var age = 31+2;
var name = "Nick";
console.info("I'm employed", employed)
console.info(typeof employed);
console.warn('age', age, typeof age)
console.info("My name is", name, typeof name)

age=35;
console.warn('age', age, typeof age)
age="18";
console.warn('age', age, typeof age)


var skills = ["HTML", "CSS", "JS"];
console.debug(skills, typeof skills);

var person = {
    employed: true,
    age: 29,
};
console.info(person, person.age, typeof person);

}

function updateTitle(title) {
    var jobtitle = document.getElementById("job-title");
console.warn(jobtitle, typeof jobtitle);

console.info(jobtitle.innerHTML);
jobtitle.innerHTML = title;
console.info(jobtitle.innerHTML);
}

function jsonwithfunctions() {
    console.log(typeof variablesExample);
console.log(typeof document);
console.log(typeof document.getElementById);


var person = {
    age:29, 
    name: "Nick",
    learn: function () {
        console.info("I'm learning JS, i love it");
    }
    play: function () {
        console.info("I'm playing. My name is", this.name);
    }
}

person.learn();
person.play();
var action = "play" // learn
person[action]();
}

//variablesExample();

updateTitle("Web developer");

jsonwithfunctions();


