import DynamicLoading from "../pages/dynamicLoading"

const dyamicLoading = new DynamicLoading()

describe('Dynamic Loading Case Tests', () => {
  it('See a Hello Word after loading', () => {
    cy.visit('dynamic_loading/1')
    dyamicLoading.getDynamicButton().click()
    dyamicLoading.getHelloWorldText().should(($text) => {
      expect($text).to.be.visible
      expect($text).to.contain('Hello World!')
    })
  })
})