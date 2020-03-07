

describe("btnModal", () => {

    it("change css of modal display", () => {
		let evntKlickTest1 = btnModal["onclick"];
        if (typeof(evntKlickTest1) == "function") {
			evntKlickTest1.call(btnModal);
        }
    //    spyOn(btnModal);
    //    expect(btnModal).toHaveBeenCalledWith(eventKlickTest1);
        expect($("#rulesModal")).toHaveCss({"display": "block"});
    });
});