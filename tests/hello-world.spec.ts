import { test, expect } from '@playwright/test';

test('hello world', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const helloWorldText = await page.textContent('h1');
    expect(helloWorldText).toBe('Hello World');
});