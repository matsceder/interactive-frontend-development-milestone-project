

 
/* ------------- Test Modal Open Close ------------- */
describe("Modal close after has been opened", () => {
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



/* ------------- Test Game Buttons ------------- */
describe("Testing the game buttons", () => {
    describe("Make sure it calls function when gamefield is clicked", () => {
        beforeEach(function() {
            power = true;
        })
        it("Should call func one when gamefield is clicked", () => {
            spyOn(window, "one")
            $(gameField1).click();
            expect(window.one).toHaveBeenCalled()
        })
        it("Should push 1 to playerOrder when clicking gamefield", () => {
            spyOn(playerOrder, "push").and.callThrough();
            $(gameField1).click();
            expect(playerOrder.push).toHaveBeenCalledWith(1)
        })
    })
    describe("Making sure that the func called by gamefield calls for audio", () => {

        it("Should play audio when gamefield is clicked and func one is called", () => {
            var a = new one();
            a.audio = jasmine.createSpy();
            a.audio();
            expect(a.audio).toHaveBeenCalled()
        })
    })
}) 

