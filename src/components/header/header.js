import { DivComponent } from "../../common/div-component.js";
import './header.css';
export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }

    render() {
        this.el.classList.add('header');
        this.el.innerHTML = `
            <div>
                <img src="/logo.svg" alt="Логотип" width="40" height="40" />
            </div>
            <div class="menu">
                <a class="menu__item menu__item--search" href="#">
                    Поиск книг
                </a>
                <a class="menu__item menu__item--favorites" href="#favorites">
                    Избранное
                    <div class="menu__counter">
                        ${this.appState.favorites.length}
                    </div>    
                </a>
            </div>
            
        `;
        return this.el;
    }
}