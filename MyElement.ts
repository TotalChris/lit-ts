import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('my-element')
class MyElement extends LitElement {
  render() {
    return html`<h1>MyElement lives here!</h1>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
