class ChallengingDom{
    elements = {
        buttonAlert: () => cy.get('.large-2 > .button.alert'),
        buttonSuccess: () => cy.get('.large-2 > .button.success'),
        buttonFirst: () => cy.get('.large-2 > .button').first(),
        elementsTable: () => cy.get('.large-10 > table'),
        tableDataEdit: () => cy.get('[href="#edit"]'),
        tableDataDelete: () => cy.get('[href="#delete"]')
    }

    getButtonFirst(){
        return this.elements.buttonFirst()
    }

    getButtonAlert(){
        return this.elements.buttonAlert()
    }

    getButtonSuccess(){
        return this.elements.buttonSuccess()
    }

    getElementsTable(){
        return this.elements.elementsTable()
    }

    getTableDataEdit(){
        return this.elements.tableDataEdit()
    }

    getTableDataDelete(){
        return this.elements.tableDataDelete()
    }
}
export default ChallengingDom