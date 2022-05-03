export class AppElement extends HTMLElement {

    constructor() {
        super();
        console.log('Inicializo App Element...');
    }

    connectedCallback() {
        this.hello = this.getAttribute("hello") || "Hola Mundo";
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
           <style>
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
            </style>
          <slot></slot>
          <p part="hello">${this.hello}</p>
          <button>Click!</button>
        `;

        const buttonWilly = this.shadowRoot.querySelector("button");
        buttonWilly.onclick = (e) => this.clickMe(e);
    }

    clickMe(e) {
        console.log(e);
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