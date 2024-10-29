import { CellsPage } from '@cells/cells-page';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import { html } from 'lit-element';
import '@pokemon/list-pokemon/list-pokemon.js';

class PokemonPage extends BbvaCoreIntlMixin(CellsPage) {
  static get is() {
    return 'pokemon-page';
  }

  connectedCallback() {
    super.connectedCallback();
    this._initPage();
  }

  _initPage() {
    this.addEventListener('navigate-to-evolution', this._handleNavigateToEvolution);
  }

  _handleNavigateToEvolution(event) {
    const pokemonName = event.detail.pokemonName;
    this.navigate('evolution', { name: pokemonName });
  }

  render() {
    return html`
      <demo-app-template data-cells-type="template">
        <div slot="app_main">
          <list-pokemon></list-pokemon>
        </div>
      </demo-app-template>
    `;
  }
}

window.customElements.define(PokemonPage.is, PokemonPage);
