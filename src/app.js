import { css, html, LitElement } from "lit";

export class AppElement extends LitElement {

    static get styles() {
        return css`
            :host {
                display: block;
                border: black solid 2px;
            }
            p {
                color: var(--color-poc, green)
            }
            ::slotted(p) {
                color: red;
            }
        `
    }

    static get properties() {
        return {
            hello: {
                type: String,
                state: true
            }
        }
    }

    render() {
       return html`
          <slot></slot>
          <p part="hello">${this.hello}</p>
          <button @click="${this.clickMe}" ?disabled="${false}">Click!</button>
        `;
    }

    clickMe(e) {
        console.log(e);
        this.hello = 'Evento';
        const message = new CustomEvent("poc:message", {
            bubbles: true,
            composed: true,
            cancelable: true,
            detail: {
                msg: 'hola desde el componente'
            }
        })
        this.dispatchEvent(message);
    }

}

customElements.define('app-element', AppElement);

customElements.whenDefined("app-element").then(() => {
    console.log("AppElement ha sido definido");
  });