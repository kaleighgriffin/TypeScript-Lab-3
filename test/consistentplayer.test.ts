import ConsistentPlayer from "../lab/consistentplayer";

describe("consistent player ", () => {

    test("name is set correctly by the constructor", () => {
        let result = new ConsistentPlayer("Pikachu", "rock");
        expect(result.name).toBe("Pikachu");
    });

    test("winCount starts at zero", () => {
        let result = new ConsistentPlayer("Pikachu", "rock");
        expect(result.winCount).toBe(0);
    });

    test("pickSymbol returns the symbol set in the constructor", () => {
        let result = new ConsistentPlayer("Pikachu", "rock");
        expect(result.pickSymbol()).toBe("rock");
    });

});