import { test, expect } from "@playwright/test";
import process from "node:process";
import { LoginPage } from "../pages/LoginPage";

test("Səhv şifrə ilə sistemə daxil olmaq mümkün olmamalıdır", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const email = process.env.USER_EMAIL;

  if (!email) {
    throw new Error("USER_EMAIL .env faylında təyin edilməlidir");
  }

  await loginPage.open();
  await loginPage.login(email, "wrong-password-12345");

  await expect(page).toHaveURL(/auth/);
});
