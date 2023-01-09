describe("Comic Collections Page", () => {
  beforeEach(() => {
    cy.intercept("https://comic-can.herokuapp.com/api/v1/comicData", {
      fixture: "getComicData.json",
    });
    cy.visit("http://localhost:3000/");
    cy.get(".my-collection-link").click();
  });

  it("should still show the nav bar", () => {
    cy.get(".navbar").contains("My Collection!");
    cy.get(".navbar").contains("Add a Comic!");
  });

  it("should show a home button that takes the user back home", () => {
    cy.get(".homeButton").contains("Home").click();
    cy.get(".banner").should("have.attr", "alt", "Comic Can");
  });
  it("should display all comics", () => {
    cy.get(".comicCollection").find(".comic-image").should("have.length", 3);
  });
  it("should show the cover image for each comic", () => {
    cy.get(".comic-image")
      .eq(0)
      .should("have.attr", "src")
      .and(
        "equal",
        "https://assets-global.website-files.com/5e9fa1c7e4ed1f5e242e2313/6193e5a113d2b7978adc2472_ZCi0CiIQ-Lmvvn6hUNV6j773Z_IQgMmuapFfCUUQXtUWDhqdL3ds_miY2q_Hw0dEX3ZhS6CdaCwzi3037ddvX_ea7XS4n1OGPEFHajAEtofPllmeqhcZPgkRkTTa5iulBXqR20aZ.png"
      );
    cy.get(".comic-image")
      .eq(1)
      .should("have.attr", "src")
      .and(
        "equal",
        "https://assets-global.website-files.com/5e9fa1c7e4ed1f5e242e2313/6193e5a1d89db28aef82d03d_F6xAg6SXwcqX06j7y3ZnijkiFveLT9A0omV_EttyxLF2BYt1Fkq2GHSB0u1wGRIOQwvdBCfR78r-WqdelrAtSIensU66mpObnrWPKQW0cwVnLk9bZnxjLoZSKVcCH9DTp46DyACN.png"
      );
    cy.get(".comic-image")
      .eq(2)
      .should("have.attr", "src")
      .and(
        "equal",
        "https://assets-global.website-files.com/5e9fa1c7e4ed1f5e242e2313/6193e5a3520d305b5632d0f8_KTW1C8bDo9o-U7riKa1XnDe5ADi8u5G2jmXTlcFjZHFl7xDv4RtSedSpPbCZP8oYy3lBlRxsEy_eOXbq5jg0cKCq8PIXUndbGg4NCFriVaCeh6nkEhzCpmL5GwjvOq8iiaejsgqn.png"
      );
  });
  it("clicking on a comic should take you to that comic's detail page", () => {
    cy.get(".comic-image").eq(0).click();
    cy.get("h2").contains("Amazing Fantasy");
    cy.get("button").contains("Back").click();
  });
});
