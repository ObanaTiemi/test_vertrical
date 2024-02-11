import ChallengingDom from "../pages/ChallengingDom"

const challengingDom = new ChallengingDom()

describe('Dynamic Loading Case Tests', () => {
    beforeEach('Visit Challenging Dom', () => {
        cy.visit('challenging_dom')
    })
    it('Click in all buttons', () => {
        challengingDom.getButtonFirst().click()
        challengingDom.getButtonAlert().click()
        challengingDom.getButtonSuccess().click()
    })
    it('Click in all edits', () => {
        challengingDom.getTableDataEdit().each(($el) => {
            cy.wrap($el).should('have.attr', 'href', '#edit').click()
        })
    })
    it('Click in all deletes', () => {
        challengingDom.getTableDataDelete().each(($el) => {
            cy.wrap($el).should('have.attr', 'href', '#delete').click()
        })
    })
})