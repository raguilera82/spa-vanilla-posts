import { html, LitElement } from "lit";

export class SearchUI extends LitElement {

    render() {
        const template = html`
          <label for="search">Search</label>  
          <input id="search" type="text">
          <button aria-label="Search Posts" @click="${this.search}" id="searchButton">Refresh</button>
        `;
        return template;
    }

    search(e) {
        const searchValue = this.querySelector('#search').value;
        const searchEvent = new CustomEvent('search:event', {
            bubbles: true,
            composed: true,
            detail: {
                searchText: searchValue
            }
        });
        this.dispatchEvent(searchEvent);
    }

    createRenderRoot() {
        return this;
    }

}

customElements.define('genk-search', SearchUI);