import Player from './player';

export default class RandomPlayer extends Player {
    constructor(name: string) {
        super(name);
    }
    pickSymbol(): string {
        let symbol = ["rock", "scissors", "paper"];
        let randomSymbol = symbol[Math.floor(Math.random() * symbol.length)];
        console.log(randomSymbol);
        return randomSymbol;
    }
}