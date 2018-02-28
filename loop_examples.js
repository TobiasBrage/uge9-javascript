let person = ['Birgit', 'Torben', 'Sigurd', 'Louise'];
let cars = ['Toyota','Alfa Romeo', 'Renault', 'VW'];
let vegetables = ['Cucumber','Tomato', 'Carrot', 'Asparagus'];
let years = [2015, 2016, 2017, 2018];
let brands = ['Apple', 'Coca Cola', 'Nike', 'LEGO'];
let wDoCounter = 0;
let wCounter = 0;

console.log('------ For In loop ------');

for (x in person) {
    console.log(person[x]);
}

console.log('------ For Each loop ------');

cars.forEach(element => {
    console.log(element);
});

console.log('------ For loop ------');

for (fCounter = 0; fCounter < vegetables.length; fCounter++) { 
    console.log(vegetables[fCounter]);
}

console.log('------ While loop ------');

while (wCounter < years.length) {
    console.log(years[wCounter]);
    wCounter++;
}

console.log('------ Do While loop ------');

do {
    console.log(brands[wDoCounter]);
    wDoCounter++;
}
while (wDoCounter < brands.length);