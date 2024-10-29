import { CellsPage } from '@cells/cells-page';
import { html } from 'lit-element';
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
  }

  // Captura el valor de la ruta antes de renderizar
  willUpdate(changedProperties) {
    if (changedProperties.has('routeParams')) {
      this.pokemonName = this.routeParams.name; 
    }
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
