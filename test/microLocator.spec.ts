import { MicroServicesLocator } from "../src/microLocator";

describe("MicroServicesLocator", () => {

    it("exists", () => {
        expect(MicroServicesLocator).toBeDefined();
    });

    it("has a locator class", () => {
        let temp = new MicroServicesLocator.Locator();
        expect(temp).toBeDefined();
    });

});