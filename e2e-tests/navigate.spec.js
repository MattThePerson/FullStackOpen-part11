const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Navigate', () => {
  test('can navigate from homepage to pokemon page', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'weedle' }).click()
    await expect(page.getByText('shield dust')).toBeVisible()
  })
})

