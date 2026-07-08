import { test, expect } from "@playwright/test";
import process from "node:process";
import { LoginPage } from "../pages/LoginPage";

test("İstifadəçi sistemə uğurla daxil olmalıdır", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const email = process.env.USER_EMAIL;
  const password = process.env.USER_PASSWORD;

  if (!email || !password) {
    throw new Error("USER_EMAIL və USER_PASSWORD .env faylında təyin edilməlidir");
  }

  await loginPage.open();
  await loginPage.login(email, password);

  await expect(page).not.toHaveURL(/auth/);
});
