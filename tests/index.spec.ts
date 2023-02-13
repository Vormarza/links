import { test, expect } from '@playwright/test';

test('homepage has title and links', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page).toHaveTitle(/Vormaza/);

  const twitter = page.getByRole('link', { name: '🐦 Discord' });
  await expect(twitter).toHaveAttribute('href', 'https://discord.gg/yoigan');

  const youtube = page.getByRole('link', { name: '📺 Youtube' });
  await expect(youtube).toHaveAttribute('href', 'https://www.youtube.com/c/yoandevco');

  const github = page.getByRole('link', { name: '🐙 Github' });
  await expect(github).toHaveAttribute('href', 'https://github.com/yoanbernabeu/LinkTreeFreeClone');

  const blog = page.getByRole('link', { name: '📝 Blog' });
  await expect(blog).toHaveAttribute('href', 'https://yoandev.co');

  const phone = page.getByRole('link', { name: '☎️ Call me' });
  await expect(phone).toHaveAttribute('href', 'tel://+6285155365411');

  const email = page.getByRole('link', { name: '📪 Email me' });
  await expect(email).toHaveAttribute('href', 'mailto://vormaza.id@gmail.com');
});
