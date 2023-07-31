context('Blocks Acceptance Tests', () => {
  describe('Text Block Tests', () => {
    beforeEach(() => {
      // given a logged in editor and a page in edit mode
      cy.visit('/');
      cy.autologin();
      cy.createContent({
        contentType: 'Document',
        contentId: 'document',
        contentTitle: 'Test document',
      });
      cy.visit('/document');
      cy.waitForResourceToLoad('document');
      cy.navigate('/document/edit');
    });

    it('As editor I can add a Follow Us block', function () {
      cy.intercept('PATCH', '/**/document').as('edit');
      cy.intercept('GET', '/**/document').as('content');
      cy.intercept('GET', '/**/Document').as('schema');

      cy.getSlate().click();
      cy.get('.button .block-add-button').click({ force: true });
      cy.get('.blocks-chooser .common .button.follow_us').click({
        force: true,
      });
      cy.get('#blockform-fieldset-default .ui.input #field-title')
        .click()
        .type('Redes sociais');
      cy.get('.inline.field.field-wrapper-animate .ui.checkbox').click();
      cy.get('#toolbar-save').click();
    });
  });
});
