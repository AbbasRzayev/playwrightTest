import { test, expect } from "./fixtures";
import { LoginPage } from "../pages/LoginPage";

test("Login səhifəsinin elementləri görünməlidir", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  await expect(loginPage.emailInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
  await expect(loginPage.loginButton).toBeVisible();
});
