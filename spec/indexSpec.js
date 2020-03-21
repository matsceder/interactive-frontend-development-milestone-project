

 
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

/* ------------- Test On Button ------------- */
describe("OnOff button", () => {
    describe("Turning the game off", () => {
        
        beforeEach(function() {
            power = false;
            $(onToggleBtn).click();
        })

        it("Should call clearColor", () => {
            spyOn(window, "clearColor");
            $(onToggleBtn).click();
            expect(window.clearColor).toHaveBeenCalled()
        })
    })
}) 

/* ------------- Test Starting a New Round ------------- */
describe("Test starting new round", () => {
    describe("Pressing Play button", () => {
        beforeEach(function() {
            power = false;
        })
        it("Should not start if power false", () => {
            spyOn(window, "play");
            $(startButton).click();
            expect(window.play).not.toHaveBeenCalled()
        })
        it("Should start when click play", () => {
            spyOn(window, "play");
            $(onToggleBtn).click(); 
            $(startButton).click();
            expect(window.play).toHaveBeenCalled()
        })
    })
}) 



/* ------------- Test Game Buttons Audio ------------- */
/*describe("", () => {
    describe("", () => {
        it("", () => {

        })
    })
}) 


*/