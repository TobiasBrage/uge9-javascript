// før

// let arealElm = document.getElementById('arealRes');

// (hentAreal = (bredde, laengde) => { 
//     arealElm.innerHTML += `Arealet af ${bredde} og ${laengde} = ${bredde * laengde}.`;
// })(3, 4);

// efter

let arealElm = document.getElementById('arealRes');
let arealL = 4;
let arealB = 3;

hentAreal = (bredde, laengde) => { 
    return bredde * laengde;
};

arealElm.innerHTML += `Arealet af ${arealB} og ${arealL} = ${hentAreal(arealB, arealL)}.`;