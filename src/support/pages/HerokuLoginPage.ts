import { Page, expect } from '@playwright/test';
import HerokuLoginElements from '../elements/HerokuLoginElements';

export default class HerokuLoginPage {
  readonly page: Page;
  readonly elements: HerokuLoginElements;

  constructor(page: Page) {
    this.page = page;
    this.elements = new HerokuLoginElements(page);
  }

  async acessarPagina(): Promise<void> {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async fazerLogin(usuario: string, senha: string): Promise<void> {
    await this.elements.usernameField.fill(usuario);
    await this.elements.passwordField.fill(senha);
    await this.elements.loginButton.click();
  }

  async validarLoginSucesso(): Promise<void> {
    await expect(this.elements.successMessage).toBeVisible();
    await expect(this.elements.successMessage).toContainText('You logged into a secure area!');
  }

  async validarLoginErro(): Promise<void> {
    await expect(this.elements.errorMessage).toBeVisible();
    await expect(this.elements.errorMessage).toContainText('Your username is invalid!');
  }
}
