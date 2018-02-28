// før

// let personDataElm = document.getElementById('personData');

// (adresselabel = (fornavn, efternavn, vej, husnummer, postnummer,bynavn) => { 
//     personDataElm.innerHTML = `
//         Jeg hedder ${fornavn} ${efternavn} og bor på ${vej} nr. ${husnummer} i ${postnummer} ${bynavn}.
//     `;
// })('Torben', 'Christiansen', 'Roskildevej', 45, 4700, 'Næstved');

// efter

let personDataElm = document.getElementById('personData');

adresselabel = (fornavn, efternavn, vej, husnummer, postnummer,bynavn) => { 
    return `Jeg hedder ${fornavn} ${efternavn} og bor på ${vej} nr. ${husnummer} i ${postnummer} ${bynavn}.`;
};

let adresseResultat = adresselabel('Torben', 'Christiansen', 'Roskildevej', 45, 4700, 'Næstved');
personDataElm.innerHTML = adresseResultat;