import { LitElement, html, css } from 'lit';

export class SimpsonsApi extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--simpsons-api-background-color);
      }

      main {
        flex-grow: 1;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'My app';
  }

  render() {
    return html`
      <main>
        <h1>Frases y personajes de los Simpsons</h1>
        <characters-data></characters-data>
      </main>
    `;
  }
}
