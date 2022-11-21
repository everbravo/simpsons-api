import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/simpsons-api.js';

describe('SimpsonsApi', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<simpsons-api></simpsons-api>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('Frases y personajes de los Simpsons');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
