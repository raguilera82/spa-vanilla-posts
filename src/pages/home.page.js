export class HomePage extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <h1>Vanilla</h1>
            <app-element hello="Hola Pablo"><p>¿Qué se va a mostrar?</p></app-element>
        `;
    }

}

customElements.define('home-page-genk', HomePage);