export class Pokemon {
    constructor(name, abilities, experience, image) {
        this.name = name || 'no name';
        this.abilities = abilities || [];
        this.experience = experience || 10;
        this.image = image || './assets/Poke_Ball.png';
    }
}

export const anotherPokemon = new Pokemon();
export function foo() {
    console.log('I am foo');
}
export default function bar() {
    console.log('I am bar');
}

// export default function baz() { ERROR  double deafult
//     console.log('I am baz');
// }

// {
//     Pokemon: class Pokemon,
//     anotherPokemon: anotherPokemon,
//      foo: foo(f)
// }
