import Kartya from "./Kartya.js";

export default class JatekTer {
    #lista=[]
    constructor(lista, szuloElem) {
        this.#lista=lista
        this.szuloElem=szuloElem
        this.szuloElem.empty()
        this.kiir()
    }

    kiir(){
        this.#lista.forEach((elem) => {
            new Kartya(elem, this.szuloElem);
          });
    }
  
}