import { test } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('Login com Zero Step AI', async ({ page }) => {
  // Acessa a página de login
  await page.goto('https://the-internet.herokuapp.com/login');

  // Passa page e test para cada chamada de AI
  const aiArgs = { page, test };

  // Preencher o campo Username
  await ai('Fill in the username field with "tomsmith"', aiArgs);

  // Preencher o campo Password
  await ai('Fill in the password field with "SuperSecretPassword!"', aiArgs);

  // Clicar no botão Login
  await ai('Click the "Login" button', aiArgs);

  // Validar que o login foi realizado com sucesso
  await ai('Verify that the text "You logged into a secure area!" appears', aiArgs);
});
