import user from '../../fixture/user.json'
import schema from '../../fixture/schema.json'

describe('Test JSON Loader API', () => {
  it('GET users', () => {
    cy.request({
        url: Cypress.env('apiUrl')  + 'users',
        method: 'GET'
    }).as('users')

    cy.get('@users').then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body[0]).to.be.jsonSchema(schema)
    })
  })

  it('POST a new user', () => {
    cy.request({
        url: Cypress.env('apiUrl') + 'users',
        method: 'POST',
        body: user
    }).as('users')

    cy.get('@users').then((res) => {
        expect(res.status).to.eq(201)
        expect(res.body).to.be.jsonSchema(schema)
    })
  })

  it('PUT update a user', () => {
    cy.request({
        url: Cypress.env('apiUrl') + 'users' + '/1',
        method: 'PUT',
        body: user
    }).as('users')

    cy.get('@users').then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body).to.be.jsonSchema(schema)
    })
  })

  it('DELETE a user', () => {
    cy.request({
        url: Cypress.env('apiUrl') + 'users' + '/10',
        method: 'DELETE'
    }).as('users')

    cy.get('@users').then((res) => {
        expect(res.status).to.eq(200)
    })
  })
})