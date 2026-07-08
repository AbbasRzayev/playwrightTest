import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Boş məlumatlarla sistemə daxil olmaq mümkün olmamalıdır", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  await expect(page).toHaveURL(/auth/);
  await expect(loginPage.emailInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
  await expect(loginPage.loginButton).toBeDisabled();
});
