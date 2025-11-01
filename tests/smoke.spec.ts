
import { test, expect } from '@playwright/test';
test('home has links', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('FE Quality Training Project')).toBeVisible();
  await expect(page.getByText('Dashboard')).toBeVisible();
});
