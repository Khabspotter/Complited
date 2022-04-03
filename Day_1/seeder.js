//
// ─── DESTRUCTURING ──────────────────────────────────────────────────────────────
//

// console.log({ kiwi, anotherPokemon });
// const obj = {
//     name: 'Jania',
//     age: 23,
// };

// const { name, age } = obj;

// console.log(name, age);

// const newAge = age+1;

// 1) создать 2 покемона через класс
// 2) cloneNode чтобы создать "шаблон"
// 3) наполнить шаблон корректными данными
// 4) добавть новую карточку на страницу

import bar,{ Pokemon } from './classes.js';
// mock pockemons
const kiwi = new Pokemon('Kiwi', ['jump on tree'], null, null);
const slowpoke = new Pokemon('Slowpoke', ['wisdom', 'psycho', 'smile'], 101, './assets/Slowpoke.png');

const cardList = document.querySelector('.card-list');
const card = document.querySelector('.card');

export const fillPokemonCard = (pokemon) => {
    const cloneCard = card.cloneNode(true);
    const title = cloneCard.querySelector('h3');
    const image = cloneCard.querySelector('img');
    const propertiesText = cloneCard.querySelector('.properties p');

    const [description] = cloneCard.getElementsByClassName('description');
    title.innerText = pokemon.name;
    image.src = pokemon.image;
    propertiesText.innerText = `Experience ${pokemon.experience}`;
    //  ['<li>wisdom</li>', 'psycho', 'smile']
    // `<li>${el}</li>` ===> '<li>' + el + '</li>'
    description.innerHTML = `
        <h4> Abilities: </h4>
        <ul>
        ${pokemon.abilities.map((el) => `<li>${el}</li>`).join('')}
        </ul>
    `;
    cardList.append(cloneCard);
};
[kiwi, slowpoke].forEach(fillPokemonCard);




