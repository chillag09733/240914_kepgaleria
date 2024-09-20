import { kepek } from "./kepek.js";
import JatekTer from "./Jatekter.js";

let aktualis = 0;

const divElem = $(".kiskepek");
const kivalasztottElem = $(".kivalasztott");

new JatekTer(kepek, divElem);


$("#prev").on("click", () => {
    if (aktualis == 0) {
        aktualis = kepek.length - 1; 
    } else {
        aktualis--; 
    }
    updateKivalasztottKep(aktualis);
});


$("#next").on("click", () => {
    if (aktualis == kepek.length - 1) {
        aktualis = 0; 
    } else {
        aktualis++;  
    }
    updateKivalasztottKep(aktualis);
});


$(window).on("kivalaszt", (event) => {
    console.log(event.detail);
    kivalasztottElem.html(`
        <div class="card">
            <div class="card-body">
                <img src="${event.detail.link}" alt="${event.detail.nev}" class="card-img-top">
                <p>${event.detail.felirat}</p>
            </div>
        </div>
    `); 
});

function updateKivalasztottKep(index) {
    const kep = kepek[index]; 
    kivalasztottElem.html(`
        <div class="card">
            <div class="card-body">
                <img src="${kep.link}" alt="${kep.nev}" class="card-img-top">
                <p>${kep.felirat}</p>
            </div>
        </div>
    `);
}
