import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("İstifadəçi sistemə uğurla daxil olmalıdır", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login("imranovfarid@gmail.com", "Farid1020.yeni");

  await expect(page).not.toHaveURL(/auth/);
});
