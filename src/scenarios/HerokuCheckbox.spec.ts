import { test, expect } from '@playwright/test';

test.describe('Teste de Checkboxes – The Internet', () => {
  test('Deve marcar e desmarcar checkboxes corretamente', async ({ page }) => {
    // Acessa a página
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    // Localiza os dois checkboxes
    const checkbox1 = page.locator('form#checkboxes input').nth(0);
    const checkbox2 = page.locator('form#checkboxes input').nth(1);

    // Garante o estado inicial
    await expect(checkbox1).not.toBeChecked();
    await expect(checkbox2).toBeChecked();

    // Marca o primeiro checkbox
    await checkbox1.check();
    await expect(checkbox1).toBeChecked();

    // Desmarca o segundo checkbox
    await checkbox2.uncheck();
    await expect(checkbox2).not.toBeChecked();
  });
});
