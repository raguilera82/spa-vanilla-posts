import './../components/posts.component';

export class PostsPage extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <h1>Posts Page</h1>
            <genk-posts></genk-posts>
        `;
    }

}

customElements.define('posts-page-genk', PostsPage);