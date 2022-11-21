import { LitElement, html, css } from 'lit';

export default class CharactersData extends LitElement {

    static get properties() {
        return {
            personajes: { type: Array },
        };
    }

    static get styles() {
        return css`
          .contenedor{
            display:flex;
            flex-wrap:wrap;
            flex-direction:row;
            align-content: center;
            justify-content: center;
          }
          img{
            width:inherit;
          }
        `;
      }
    

    constructor(){
        super();
        this.personajes = [];
        this.addEventListener('data-api', e => {
            this.personajes = e.detail.dataInfo;
        });
    }


    get template(){
        return html`
            ${this.personajes.map( ({personaje, frase, imagen}) => html`
            <div class="card m-2" style="width: 17rem;">
                <img src="${imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${personaje}</h5>
                    <p class="card-text">${frase}</p>
                </div>
            </div>
            `)}
        `;
    }


    _siguiente(){

        let sig = parseInt(this.shadowRoot.querySelector('api-data').pagination);
        sig += 10;
        this.shadowRoot.querySelector('api-data').setAttribute('pagination', sig);
      
    }

    _anterior(){

        let sig = parseInt(this.shadowRoot.querySelector('api-data').pagination);
        if (sig > 10){
            sig -= 10;
            this.shadowRoot.querySelector('api-data').setAttribute('pagination', sig);
        }
        
    }

    render() {
        return html`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
            <api-data pagination="10"></api-data>
            <div class="contenedor">
            ${this.template}
            </div>
            <div class="m-2 pb-3">
                <button class="btn btn-success btn-lg" @click="${this._anterior}">Anterior</button>
                <button class="btn btn-secondary btn-lg" @click="${this._siguiente}">Siguiente</button>
            </div>
        `;
    }
}

