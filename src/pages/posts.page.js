export class PostsPage extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `Posts Page`;
    }

}

customElements.define('posts-page-genk', PostsPage);