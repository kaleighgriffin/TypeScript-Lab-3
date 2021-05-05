import RandomPlayer from '../lab/randomplayer';

describe("random player ", () => {

    test("name is set correctly by the constructor", () => {
        let result = new RandomPlayer("Pikachu");
        expect(result.name).toBe("Pikachu");
    });

    test("winCount starts at zero", () => {
        let result = new RandomPlayer("Pikachu");
        expect(result.winCount).toBe(0);
    });

});