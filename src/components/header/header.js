import { DivComponent } from "../../common/div-component.js";

export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }

    render() {
        this.el.innerHTML = '';
        this.el.classList.add('header');
        this.el.innerHTML = `
            <div>
                <img src="/logo.svg" alt="Логотип" />
            </div>
        `;
        return this.el;
    }
}