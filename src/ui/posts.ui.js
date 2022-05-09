import { html, LitElement } from "lit";

export class PostsUI extends LitElement {

    static get properties() {
        return {
            posts: {
                type: Array
            }
        }
    }

    render() {
        return html`
            <ul id="posts">
            ${this.posts && this.posts.map((post) => html`
                <li class="post" id="post_${post.id}">
                    ${post.id} -- ${post.title}
                </li>
            `)}
            </ul>
        `;
    }

    createRenderRoot() {
        return this;
    }

}

customElements.define('posts-ui', PostsUI);