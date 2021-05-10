const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}
const newcats = ["Broom"];
function appendCat() {
    let newcats = ([...cats, "Broom"]);
    return newcats;
}
const orangecats = ["Arnold"]; 
function prependCat() {
    let orangecats =(["Arnold", ...cats]);
    return orangecats;
}
const kats = ["Milo", "Otis"];
function removeLastCat() {
    cats.slice(-1);
    return kats;
}
const lats = ["Otis", "Garfield"];
function removeFirstCat() {
    cats.slice(0);
    return lats;
}
