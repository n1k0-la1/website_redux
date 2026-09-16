class smthree extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
            My views are dropping so follow me!
        `;
    }
}

customElements.define("301-sitemap", smthree);