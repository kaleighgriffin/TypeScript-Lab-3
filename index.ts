import configPrompt from 'prompt-sync';
import Player from './lab/player';
import ConsistentPlayer from './lab/consistentplayer';
import { displayHeros, playAndPickWinner } from './lab/function';
import RandomPlayer from './lab/randomplayer';

// // prompt is a function to get user input
const prompt = configPrompt({sigint:true});

// let hero: Player = new ConsistentPlayer("Geodude", "rock");
// let villain: Player = new ConsistentPlayer("Meowth", "scissors");

// console.log(hero.pickSymbol());

// let winner = playAndPickWinner(hero, villain);
// console.log("The winner is: ", winner);

// let prize = prompt("Enter a prize: ");
// console.log("You typed " + prize);

let villainArray: Player[] = [
    new ConsistentPlayer("Carkol", "rock"),
    new ConsistentPlayer("Corviknight", "scissors"),
    new ConsistentPlayer("Bulbasaur", "paper"),
    new ConsistentPlayer("Perrserker", "scissors"),
    new RandomPlayer("Pikachu"),
    new RandomPlayer("Charizard"),
    new RandomPlayer("Snorlax"),
    new RandomPlayer("Mewtwo"),
    new RandomPlayer("Ditto"),
]

let heroArray: Player[] = [
    new ConsistentPlayer("Roselia", "paper"),
    new ConsistentPlayer("Turtwig", "paper"),
    new ConsistentPlayer("Aron", "rock"),
    new RandomPlayer("Eevee"),
]

// displayHeros(heroArray);
let heroWins = 0;

for (let villain of villainArray) {
    console.log(`You are facing: ${villain.name}`);
    console.log(`Who will you pick to battle for you?`);
    displayHeros(heroArray);
    let heroChoice = prompt(`Type a hero name: `);
    const hero = heroArray.find((hero) => {
        return hero.name === heroChoice;
    });
    if (hero === undefined) {
        console.log(`Not a valid hero`);
        break;
    }
    let winner = playAndPickWinner(hero , villain);
    if (winner === hero) {
        hero.winCount += 1;
        heroWins += 1;
        console.log(`YOUR HERO WINS!`);
    } else if (winner === villain) {
        villain.winCount += 1;
        console.log(`YOUR HERO LOSES!`);
    } else {
        console.log(`IT'S A TIE!`);
    }
}

console.log(`GAME OVER!`);
console.log(`Your heroes won ${heroWins} out of ${villainArray.length} rounds`);
displayHeros(heroArray);