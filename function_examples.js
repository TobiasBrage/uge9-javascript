// Funktioner kan kaldes før selve funktionen er defineret grundet hoisting

// basic function

function basicFunction() {
    console.log('Basic function');
}

// basic function as variable

var basicFunction = function() {
    console.log('Basic function as variable');
} 

// self invoke function with !

! function(){
    console.log('Self invoke');
}();

// self invoke function

(function() {
    console.log('Self invoke');
})();

// self invoke function with name

(arrowFunctionSI = () => { 
    console.log('Arrow function self invoke');
})();

// arrow function

arrowFunction = () => { 
    console.log('Arrow function');
}

// object

let person = function () {
    return {
        variable: 0,
        hils: function() {
            console.log('blah');
            this.variable = 1;
        },
        test: function() {
            console.log('test');
        }
    }
}

let p = person();
p.test();