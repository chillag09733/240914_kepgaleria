export default class Kartya {
    #kep = {}; 
   
    constructor(kep, szuloElem) {
      this.#kep = kep;
      this.szuloElem = szuloElem;
      this.egyKepKiir();
      this.kepElem = $(".kivalaszt:last");
      console.log(this.kepElem)
      this.esemenyKezelo();
    }
    egyKepKiir() {
      this.szuloElem.append(`
              <div class="card kivalaszt col-lg-3 col-md-4 col-sm-6 ">
                  <div class="card-body">                 
                      <img src="${this.#kep.link}" alt="${this.#kep.nev}" class="card-img-top">
                 </div>
              </div>
              `);
    }
  
    esemenyKezelo() {
      this.kepElem.on("click", () => {
        console.log(this);
        const e = new CustomEvent("kivalaszt", { detail: this.#kep });
        window.dispatchEvent(e);
      });
    }
  }