import { CellsPage } from '@cells/cells-page';
import { html, css } from 'lit-element';
import '@bbva-experience-components/bbva-button-default/bbva-button-default.js';
import '@pokemon/evolution-pokemon-ui/evolution-pokemon-ui.js';

class EvolutionPage extends CellsPage {
  static get is() {
    return 'evolution-page';
  }

  static get properties() {
    return {
      pokemonName: { type: String }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('navigate-to-pokemon', () => this.navigate('pokemon'));
    this.addEventListener('navigate-to-evolution', (e) => {
      this.pokemonName = e.detail.pokemonName;
    });
  }

  render() {
    return html`
      <demo-app-template data-cells-type="template">
        <div slot="app_main">
          <evolution-pokemon-ui .pokemonName="${this.pokemonName}"></evolution-pokemon-ui>
        </div>
      </demo-app-template>
    `;
  }
}

window.customElements.define(EvolutionPage.is, EvolutionPage);
