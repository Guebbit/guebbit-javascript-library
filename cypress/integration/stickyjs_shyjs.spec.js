import { stickyJs, shyJs } from '../../src';

describe('Test header manipulation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000/stickyjs_shyjs.html')
  });

  it('stickyJs alone', () => {
    cy.window()
      .then($window => {
        cy.get('#nav-scroll-test')
          .then($element => {
            stickyJs($element[0], 'i-am-sticky', $window);
          });
      });

    cy.get('#nav-scroll-test')
      .should('not.have.class', 'i-am-sticky');
    cy.scrollTo(0, 300);
    cy.get('#nav-scroll-test')
      .should('have.class', 'i-am-sticky')
      .should('have.css', 'position', 'fixed');
  });

  it('shyJs alone', () => {
    cy.window()
      .then($window => {
        cy.get('#nav-scroll-test')
          .then($element => {
            // position fixed needed
            $element[0].style.position = 'fixed';
            $element[0].style.top = '0px';

            shyJs($element[0], {
              className: 'i-am-shy'
            }, $window);
          });
      });

    cy.get('#nav-scroll-test')
      .should('not.have.class', 'i-am-shy');
    cy.scrollTo(0, 200);
    cy.get('#nav-scroll-test')
      .should('have.class', 'i-am-shy')
      .should('have.css', 'position', 'fixed');
    cy.scrollTo(0, 100);
    cy.get('#nav-scroll-test')
      .should('not.have.class', 'i-am-shy');
  });

  it('stickyJs AND shyJs together', () => {
    cy.window()
      .then($window => {
        cy.get('#nav-scroll-test')
          .then($element => {
            const { top } = $element[0].getBoundingClientRect();
            stickyJs($element[0], 'i-am-sticky', $window);
            shyJs($element[0], {
              className: 'i-am-shy',
              // needed because it could be awkward if not fixed already
              treshold: top + 200,
            }, $window);


            cy.get('#nav-scroll-test')
              .should('not.have.class', 'i-am-shy')
              .should('not.have.class', 'i-am-sticky');
            cy.scrollTo(0, top + 199);
            cy.get('#nav-scroll-test')
              .should('not.have.class', 'i-am-shy')
              .should('have.class', 'i-am-sticky')
              .should('have.css', 'position', 'fixed');
            cy.scrollTo(0, 500);
            cy.get('#nav-scroll-test')
              .should('have.class', 'i-am-sticky')
              .should('have.class', 'i-am-shy');
            cy.scrollTo(0, 400);
            cy.get('#nav-scroll-test')
              .should('have.class', 'i-am-sticky')
              .should('not.have.class', 'i-am-shy');
          });
      });
  });
})
