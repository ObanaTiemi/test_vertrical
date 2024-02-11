class DynamicLoading{
    elements = {
        dynamicButton: () => cy.get('button').contains('Start'),
        helloWorldText: () => cy.get('#finish > h4', {timeout: 10000})
    }

    getDynamicButton(){
        return this.elements.dynamicButton()
    }

    getHelloWorldText(){
        return this.elements.helloWorldText()
    }
}
export default DynamicLoading