import {html, LitElement} from '@polymer/lit-element';
import styles from './styles.less';

class nsButton extends LitElement {

  // Public property API that triggers re-render (synced with attributes)
  static get properties() {
    return {
      type: String,
      loadingMessage: String,
      loading: String,
      disabled: String
    };
  }

  constructor() {
    super();
    this.type = 'primary';
    this.loadingMessage = 'loading...';
    this.loading = 'false';
    this.disabled = 'false';
  }

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function
  _render({type, loading, loadingMessage, disabled}) {
    const isDisabled = disabled === 'true';
    const isLoading = loading === 'true';

    return html([`
      <style>${styles}</style>
      <button ${isDisabled ? 'disabled' : ''} class="${type}">
        ${isLoading ? this.loadingMessage : '<slot>'}
      </button>
    `]);
  }

}
customElements.define('ns-button', nsButton);
