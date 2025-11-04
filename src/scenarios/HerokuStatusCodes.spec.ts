import { test, expect } from '@playwright/test';

test.describe('Teste de status codes – The Internet', () => {
  const base = 'https://the-internet.herokuapp.com/status_codes';

  test('Deve navegar para status code 200 e verificar conteúdo', async ({ page }) => {
    await page.goto(`${base}/200`);
    const body = await page.locator('body').innerText();
    await expect(body).toContain('This page returned a 200 status code');
  });

  test('Deve navegar para status code 404 e verificar conteúdo', async ({ page }) => {
    await page.goto(`${base}/404`);
    const body = await page.locator('body').innerText();
    await expect(body).toContain('This page returned a 404 status code');
  });
});
