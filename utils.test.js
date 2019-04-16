const utils = require("./utils")

// utils.add
// utils.sub

describe("add function", () => {
    test("check add to be 4", () => {
        expect(add()).toBe(4)
    })

    test("check add not 5", () => {
        expect(add()).not.toBe(5)
    })

})


// TODO add test for sub function