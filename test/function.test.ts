import ConsistentPlayer from "../lab/consistentplayer";
import { playAndPickWinner } from "../lab/function";
import Player from "../lab/player";

describe("play and pick winner function", () => {

    test("rock vs scissors", () => {
        // arrange
        let hero: Player = new ConsistentPlayer("Geodude", "rock");
        let villain: Player = new ConsistentPlayer("Meowth", "scissors");
        // act
        let result: Player|null = playAndPickWinner(hero, villain);
        // assert
        expect(result).toBe(hero);
    });

    test("rock vs paper", () => {
        let hero: Player = new ConsistentPlayer("Geodude", "rock");
        let villain: Player = new ConsistentPlayer("Grookey", "paper");
        let result: Player|null = playAndPickWinner(hero, villain);
        expect(result).toBe(villain);
    });

    test("rock vs rock", () => {
        let hero: Player = new ConsistentPlayer("Geodude", "rock");
        let villain: Player = new ConsistentPlayer("Onix", "rock");
        let result: Player|null = playAndPickWinner(hero, villain);
        expect(result).toBe(null);
    });

    test("paper vs scissors", () => {
        let hero: Player = new ConsistentPlayer("Grookey", "paper");
        let villain: Player = new ConsistentPlayer("Meowth", "scissors");
        let result: Player|null = playAndPickWinner(hero, villain);
        expect(result).toBe(villain);
    });

    test("paper vs rock", () => {
        let hero: Player = new ConsistentPlayer("Grookey", "paper");
        let villain: Player = new ConsistentPlayer("Geodude", "rock");
        let result: Player|null = playAndPickWinner(hero, villain);
        expect(result).toBe(hero);
    });

    test("paper vs paper", () => {
        let hero: Player = new ConsistentPlayer("Grookey", "paper");
        let villain: Player = new ConsistentPlayer("Lotad", "paper");
        let result: Player|null = playAndPickWinner(hero, villain);
        expect(result).toBe(null);
    });

    test("scissors vs paper", () => {
        let hero: Player = new ConsistentPlayer("Meowth", "scissors");
        let villain: Player = new ConsistentPlayer("Grookey", "paper");
        let result: Player|null = playAndPickWinner(hero, villain);
        expect(result).toBe(hero);
    });

    test("scissors vs rock", () => {
        let hero: Player = new ConsistentPlayer("Meowth", "scissors");
        let villain: Player = new ConsistentPlayer("Geodude", "rock");
        let result: Player|null = playAndPickWinner(hero, villain);
        expect(result).toBe(villain);
    });

    test("scissors vs scissors", () => {
        let hero: Player = new ConsistentPlayer("Meowth", "scissors");
        let villain: Player = new ConsistentPlayer("Bisharp", "scissors");
        let result: Player|null = playAndPickWinner(hero, villain);
        expect(result).toBe(null);
    });

});