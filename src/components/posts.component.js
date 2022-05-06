import { html, LitElement } from "lit";
import { FilterPostsUseCase } from "../../instrumented/usecases/filter-posts.usecase";
import { AllPostsUseCase } from "../usecases/all-posts.usecase";
import { OddPostsUseCase } from "../usecases/odd-posts.usecase";
import './../ui/posts.ui';
import './../ui/search.ui';

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

        this.addEventListener("search:event", (e) => {
            const filterPostsUseCase = new FilterPostsUseCase();
            const searchText = e.detail.searchText;
            this.posts = filterPostsUseCase.execute(this.posts, searchText);
        })
    }

    async allOdds() {
        const oddPostsUseCase = new OddPostsUseCase();
        this.posts = await oddPostsUseCase.execute();
    }

    render() {
        return html`
            <button id="oddAction" @click="${this.allOdds}">Odd</button>
            <genk-search></genk-search>
            <posts-ui .posts="${this.posts}"></posts-ui>
        `;
    }

    createRenderRoot() {
        return this;
    }


}

customElements.define('genk-posts', PostsComponent);