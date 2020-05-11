let drivers = ["Milo", "Otis", "Garfield"]
let new_ary = [];

function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name){
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
    drivers.pop(name);
}

function destructivelyRemoveFirstDriver(){
    drivers.shift(name);
}

function appendDriver(name){
    return new_ary = [...drivers, name];
}

function prependDriver(name){
    return new_ary = [name, ...drivers];
}

function removeLastDriver(){
    return new_ary = drivers.slice(0, drivers.length - 1)
}

function removeFirstDriver(){
    return new_ary = drivers.slice(1);
}