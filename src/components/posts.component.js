import { html, LitElement } from "lit";
import { AllPostsUseCase } from "../usecases/all-posts.usecase";
import { OddPostsUseCase } from "../usecases/odd-posts.usecase";
import './../ui/posts.ui';

export class PostsComponent extends LitElement {

    static get properties() {
        return {
            posts: {
                type: Array,
                state: true
            }
        }
    }

    async connectedCallback() {
        super.connectedCallback();
        const allPostsUseCase = new AllPostsUseCase();
        this.posts = await allPostsUseCase.execute();
    }

    async allOdds() {
        const oddPostsUseCase = new OddPostsUseCase();
        this.posts = await oddPostsUseCase.execute();
    }

    render() {
        return html`
            <button @click="${this.allOdds}">Odd</button>
            <posts-ui .posts="${this.posts}"></posts-ui>
        `;
    }


}

customElements.define('genk-posts', PostsComponent);