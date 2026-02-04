const { test, describe, expect } = require('@playwright/test')

const baseURL = 'http://localhost:8080'

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto(baseURL)
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('pokemon page can be navigated to', async ({ page }) => {
    await page.goto(baseURL)
    await page.locator(page.getByText('ivysaur')).click()
    await expect(page).toHaveURL(`${baseURL}/pokemon/ivysaur`)
    await expect(page.getByText(/chlorophyll/i)).toBeVisible()
  })
})