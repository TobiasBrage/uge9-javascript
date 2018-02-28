// før

// let momsElm = document.getElementById('momsPris');

// prisMedMoms = (pris) => { 
//     momsElm.innerHTML += `Pris ${pris} med moms = ${pris * (1 + 0.25)}. `;
// }

// prisMedMoms(200);
// prisMedMoms(800);

// efter

let momsElm = document.getElementById('momsPris');
let pris = [200, 800];

prisMedMoms = (pris) => { 
    return pris * (1 + 0.25);
}

pris.forEach(element => {
    momsElm.innerHTML += `Pris ${element} med moms = ${prisMedMoms(element)}. `;
});