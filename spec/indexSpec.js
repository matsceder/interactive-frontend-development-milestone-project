

 
/* ------------- Test Modal Open Close ------------- */
describe("Modal open close", () => {
/*    describe("btnModal click to change css style", () => {
        it("should have css display block", () => {
            spyOnEvent($(btnModal), "click")
            $(btnModal).click()
            expect($("#rulesModal")).toHaveCss({"display": "block"})
        })
    })*/
    describe("btnModalClose click to change css style", () => {
        beforeEach(function() {
            $(btnModal).click()
        })
        it("should have css display none", () => {
            spyOnEvent($(btnModalClose), "click")
            $(btnModalClose).click()
            expect($("#rulesModal")).toHaveCss({"display": "none"})
        })
    })
});

/* ------------- Test On button ------------- */
describe("OnOff button", () => {
    describe("Turning the game off", () => {
        
        beforeEach(function() {
            $(onToggleBtn).click();
        })

        it("Should call clearColor and clearInterval", () => {
            spyOn(window, "clearColor");
            $(onToggleBtn).click();
            expect(window.clearColor).toHaveBeenCalled()
        })
    })
})
 


