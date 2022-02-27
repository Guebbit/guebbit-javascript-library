import {mouseParallax} from '../../src';

// ENABLE\DISABLE mouse parallax && put fixed value instead of mouse (for animations), maybe for some seconds

// TODO NOT visual test
describe('Test mouseParallax (visual test only)', () => {

  it('Shot effects', () => {
    cy.visit('http://localhost:8000/mouseparallax-shoteffect.html');
    cy.document()
      .then($document => {
        cy.get('#parallax-object > *')
          .then($elements => {
            mouseParallax($elements.toArray(), null, 100, 50, true, $document);
          });
      });
  });

  it('Random Objects', () => {
    cy.visit('http://localhost:8000/mouseparallax-random.html');
    cy.document()
      .then($document => {
        cy.get('#parallax-object > *')
          .then($elements => {
            const parallaxObject = mouseParallax($elements.toArray(), null, 120, 50, false, $document);
            const { items = [] } = parallaxObject;
            // stop #random-circle to move on Y axis
            items[5].intensityY = 0;
          });
      });
  });
})
