export class HomePage extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `Home Page`;
    }

}

customElements.define('home-page-genk', HomePage);