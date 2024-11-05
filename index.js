function receivesAFunction(callback) {
    return callback();
}

function returnsThings(thing) {
    return thing;
}

function returnsANamedFunction() {
    return returnsThings;
}

function returnsAnAnonymousFunction() {
    return () => console.log('get glorped, son');
}