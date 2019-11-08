import { getGreeting } from '../support/app.po';

describe('web-portal', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to web-portal!');
  });
});
