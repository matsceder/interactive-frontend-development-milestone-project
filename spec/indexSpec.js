

 
/* ------------- Test Modal Open Close ------------- */
describe("Modal open close", () => {
    describe("btnModal click", () => {
        it("should have css display block", () => {
            spyOnEvent($(btnModal), "click")
            $(btnModal).click()
            expect($("#rulesModal")).toHaveCss({"display": "block"})
        })
    })
    describe("btnModalClose click", () => {
        it("should have css display none", () => {
            spyOnEvent($(btnModalClose), "click")
            $(btnModalClose).click()
            expect($("#rulesModal")).toHaveCss({"display": "none"})
        })
    })
});

/* ------------- Test  ------------- */
/*describe("", () => {
    describe("", () => {
        it("", () {
            expect().()
        })
    })
})
*/


