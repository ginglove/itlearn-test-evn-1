import test, { expect } from "@playwright/test";
/**
 * Bài 1: TARGET: https://baitap.itlearn.edu.vn/login.php

YÊU CẦU 1 — XPath Relative Cơ Bản: Tìm ô "Email": Tìm ô "Mật khẩu": Tìm nút "Đăng nhập": Tìm link "Đăng ký": Tìm form chứa inputs: //form

YÊU CẦU 2 — Viết Playwright Test:
*/

// YC1:
// input[@type='email']
// input[@type='password']
// button[@type='submit']
// a[@href='/register.php']
// form[.//input[@type='email']]

test("YC2", async ({ page }) => {
  await page.goto("https://baitap.itlearn.edu.vn/login.php");

  //   await expect(page.getByRole("textbox", { name: "Email" })).toBeVisible();
  //   await expect(page.getByRole("textbox", { name: "Mật khẩu" })).toBeVisible();
  //   await expect(page.getByRole("button", { name: "Đăng nhập" })).toBeVisible();
  //   await expect(page.getByRole("link", { name: "Đăng ký" })).toBeVisible();
  const email = page.locator("xpath=input[@type='email']");
  const password = page.locator("xpath=input[@type='password']");
  const btnLogin = page.locator("xpath=button[@type='submit']");
  const btnRegister = page.locator("xpath=a[@href='/register.php']");
  const form = page.locator("xpath=form[.//input[@type='email']]");

  await expect(email).toBeVisible();
  await expect(password).toBeVisible();
  await expect(btnLogin).toBeVisible();
  await expect(btnRegister).toBeVisible();
  await expect(form).toBeVisible();
});
/**
Bài 2: TARGET: https://baitap.itlearn.edu.vn/index.php YÊU CẦU 1: Tim xpath hoac css

Tim text : Phòng thực hành kiểm thử
Tim logo : ITLearn
Tim thong tin cua box Bai 1: Form dang nhap co captcha
Tim thong tin cua box Bai 2: Form reset password
Tim button Dang Nhap, Link Dang ky

Quay lai muc luc
Header : Bài 1 — Form đăng nhập có Captcha
Cac tag: De, #form, #login, #validation, #captcha
Element tab: De bai, Form thuc hanh, Nop bai
Thong tin trong tab De bai
YEU CAU:

Sau khi tim xpath, chuyen sang get by role de thuc hien tim element visible
 */

// YÊU CẦU 1: Tim xpath hoac css

//h1[text()='Phòng thực hành kiểm thử']
//img[@class='site-header__logo-dark']
//h3[text()='Bài 1 — Form đăng nhập có Captcha']
//h3[text()='Bài 2 — Form Reset Password']
//a[@href='/login.php']
//a[@href='/register.php']

// TARGET 2:
//a[@class='exercise-header__back']
//h1[text()='Bài 1 — Form đăng nhập có Captcha']
//span[@class='badge badge--easy']
//span[text()='#form']
//span[text()='#login]
//span[text()='#validation']
//span[text()='#captcha']
//button[@data-tab="description"]
//button[@data-tab="playground"]
//button[@data-tab="submit"]

test("Target 2: xpath", async ({ page }) => {
  await page.goto("https://baitap.itlearn.edu.vn/exercise.php?id=1");

  const headerBack = page.locator("//a[@class='exercise-header__back']");
  const exc1 = page.locator("//h1[text()='Bài 1 — Form đăng nhập có Captcha']");
  const tagEasy = page.locator("//span[@class='badge badge--easy']");
  const tagForm = page.locator("//span[text()='#form']");
  const tagLogin = page.locator("//span[text()='#login]");
  const tagValidation = page.locator("//span[text()='#validation']");
  const captcha = page.locator("//span[text()='#captcha']");
  const tabDescription = page.locator("//button[@data-tab='description']");
  const tabPlayground = page.locator('//button[@data-tab="playground"]');
  const tabSubmit = page.locator('//button[@data-tab="submit"]');

  await expect(headerBack).toBeVisible();
  await expect(exc1).toBeVisible();
  await expect(tagEasy).toBeVisible();
  await expect(tagForm).toBeVisible();
  await expect(tagLogin).toBeVisible();
  await expect(tagValidation).toBeVisible();
  await expect(captcha).toBeVisible();
  await expect(tabDescription).toBeVisible();
  await expect(tabPlayground).toBeVisible();
  await expect(tabSubmit).toBeVisible();
});

test("Target 2: getbyRole", async ({ page }) => {
  await page.goto("https://baitap.itlearn.edu.vn/exercise.php?id=1");

  // Quay lai thu muc
  await expect(
    page.getByRole("link", { name: "← Quay lại mục lục" }),
  ).toBeVisible();

  // Heading Bai 1
  await expect(
    page.getByRole("heading", {
      name: "Bài 1 — Form đăng nhập có Captcha",
      level: 1,
    }),
  ).toBeVisible();

  // tag
  await expect(page.getByText(/^dễ$/i)).toBeVisible();
  await expect(page.getByText("#form", { exact: true })).toBeVisible();
  await expect(page.getByText("#login", { exact: true })).toBeVisible();
  await expect(page.getByText("#validation", { exact: true })).toBeVisible();
  await expect(page.getByText("#captcha", { exact: true })).toBeVisible();

  // tab
  await expect(page.getByRole("tab", { name: /Đề bài/ })).toBeVisible();
  await expect(page.getByRole("tab", { name: /Form thực hành/ })).toBeVisible();
  await expect(page.getByRole("tab", { name: /Nộp bài/ })).toBeVisible();

  await expect(
    page.getByRole("heading", { name: /Bài 1: Form đăng nhập có Captcha/ }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /Tài khoản hợp lệ/ }),
  ).toBeVisible();
});
