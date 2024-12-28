import { DivComponent } from "../../common/div-component.js";
import './search.css';

export class Search extends DivComponent {
    constructor(state) {
        super();
        this.state = state;
    }

    search() {
        const value = this.el.querySelector('input').value;
        this.state.searchQuery = value;
    }

    render() {
        this.el.classList.add('search');
        this.el.innerHTML = `
            <div class="search__wrapper">
                <input 
                    type="text"
                    class="search__input" type="text"
                    placeholder="Найти книгу или автора..."
                    value="${this.state.searchQuery ? this.state.searchQuery : ""}"
                />
                <img src="/search.svg" alt="Иконка поиска"/>
            </div>
            <button class="search__button" type="button" aria-label="Искать">  
            </button>
        `;
        this.el.querySelector('.search__button').addEventListener('click', this.search.bind(this));
        this.el.querySelector('input').addEventListener('keydown', (event) => {
            if (event.code === "Enter") {
                this.search();
            }
        });
        return this.el;
    }
}
