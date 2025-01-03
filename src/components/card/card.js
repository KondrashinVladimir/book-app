import { DivComponent } from "../../common/div-component.js";
import './card.css';

export class Card extends DivComponent {
    constructor(appState, cardState) {
        super();
        this.cardState = cardState;
        this.appState = appState;
    }

    #addToFavorites () {
        this.appState.favorites.push(this.cardState);
    }

    #deleteFromFavorites() {
        this.appState.favorites = this.appState.favorites.filter(
            b => b.key !== this.cardState.key
        );
    }

    render() {
        this.el.classList.add('card');
        const existInFavorites = this.appState.favorites.find(
            b => b.key == this.cardState.key
        );
        this.el.innerHTML = `
            <div class="card__image">
                <img src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" alt="Обложка книги" />
            </div>
            <div class="card__info">
                <div class="card__tag">
                    ${this.cardState.subject ? this.cardState.subject[0] : "Не задано"}
                </div>
                <div class="card__name">
                    ${this.cardState.title}
                </div>
                <div class="card__author">
                    ${this.cardState.author_name ? this.cardState.author_name[0] : "Не задано"}
                </div>
                <div class="card__footer">
                    <button class="card__button-add ${existInFavorites ? "card__button-add--active" : ""}" type="button" aria-label="Добавить в избранное">
                    </button>
                </div>
            </div> 
        `;

        if (existInFavorites) {
            this.el
            .querySelector('button')
            .addEventListener('click', this.#deleteFromFavorites.bind(this))
        } else {
            this.el
            .querySelector('button')
            .addEventListener('click', this.#addToFavorites.bind(this))
        }

        return this.el;
    }
}