import { LitElement } from 'lit';

export default class ApiData extends LitElement {
    static get properties() {
        return {
            pagination: { type: String, reflect:true },
        };
    }

    performUpdate(){
        this.pagination = '10';
    }

    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        this.GetData(this.pagination);
    }

    async GetData(pag){
        const url = `https://simpsons-quotes-api.herokuapp.com/quotes?count=${pag}`;
        await fetch(url, {method: 'GET'})
        .then(response => {
            if (response.ok) return response.json();
            return Promise.reject(response); 
        })
        .then(data => {
            this.sendData(data);
        })
        .catch(error =>{
            console.log("Something went wrong, Error: " , error);
        });
    }

    sendData(data){
        let arrTemp = [];
        data.forEach(({quote, character, image}) => {
            arrTemp.push({
                frase : quote,
                personaje : character,
                imagen : image
            });
        });
        this.sendEvent(arrTemp);
        arrTemp = [];
    }

    sendEvent(dataInfo){
        this.dispatchEvent(new CustomEvent('data-api', {
            detail : {dataInfo},
            bubbles : true,
            composed : true
        }));
    }

}
