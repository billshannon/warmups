//1. What is the difference between call and apply? Provide an example of each in your explanation.

// Both call and apply are similar methods, and they execute a function in the context, or scope, of the first argument that you pass to them. The difference is that apply lets you invoke the function with arguments as an array; call requires the parameters be listed explicitly with comma separated values.

//theFunction.apply(valueForThis, arrayOfArgs)

//theFunction.call(valueForThis, arg1, arg2, ...)

function theFunction(name, profession) {
    console.log("My name is " + name + " and I am a " + profession + ".");
}
//console.log(theFunction("John", "fireman"));
//console.log(theFunction.apply(undefined, ["Susan", "school teacher"]));
//console.log(theFunction.call(undefined, "Claude", "mathematician"));


function Novels (numPages, timePeriod, author) {
    this.numPages = numPages;
    this.timePeriod = timePeriod;
    this.author = author;
}

function MurakamiNovels (numPages, timePeriod) {
    Novels.apply(this, [numPages, timePeriod]);
    this.weird = true;
    this.author = "Murakami"
}

MurakamiNovels.prototype = Novels.prototype;
MurakamiNovels.prototype.constructor = MurakamiNovels;

var kafkaOnTheShore = new MurakamiNovels(532, "present")
console.log(kafkaOnTheShore)


/* 1. construct cows that can moo
> var bessy = new Cow("Bessy", 10);
> console.log(bessy.moo());
moooooooo I'm Bessy moooooooo!!!!!!
> var mooey = new Cow("Mooey", 2);
> console.log(mooey.moo());
moooooooo I'm Mooey moooooooo!!!!!!
> var chewy = new Cow("Chewy", 1);
> console.log(chewy.moo());
moooooooo I'm Chewy moooooooo!!!!!! */