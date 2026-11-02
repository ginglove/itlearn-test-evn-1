/*Bài 1:
TARGET: https://baitap.itlearn.edu.vn/login.php

YÊU CẦU 1 — XPath Relative Cơ Bản:
Tìm ô "Email": //input[@type ='email']
Tìm ô "Mật khẩu": //input[@type ='password']
Tìm nút "Đăng nhập": //button[@type ='submit']
Tìm link "Đăng ký": //a[@href ='/register.php']
Tìm form chứa inputs: //form[.//input]*/
//YÊU CẦU 2 — Viết Playwright Test:
  expect(page.getByLabel('Email')).toBeVisible();
  expect(page.getByLabel('Mật khẩu')).toBeVisible();
  expect(page.getByRole('button', {name: 'Đăng nhập'})).toBeVisible();
  expect(page.getByRole('link', {name: 'Đăng ký'})).toBeVisible();
  expect(page.locator('form')).toBeVisible();
/*Bài 2:
TARGET: https://baitap.itlearn.edu.vn/index.php
YÊU CẦU 1: Tim xpath hoac css
- Tim text : Phòng thực hành kiểm thử //h1[text()='Phòng thực hành kiểm thử']
- Tim logo : ITLearn //img[@src="/assets/images/logo.png"]
- Tim thong tin cua box Bai 1: Form dadng nhap co captcha //h3 [@class="exercise-card__title" and text() ='Bài 1 — Form đăng nhập có Captcha' ]
- Tim thong tin cua box Bai 2: Form reset password //h3 [@class="exercise-card__title" and text() ='Bai 2: Form reset password' ]
- Tim button Dang Nhap, Link Dang ky: //a[@href="/login.php"] , //a[@href="/register.php"] */
 expect(page.getByText('Phòng thực hành kiểm thử')).toBeVisible();
 expect(page.getByRole('image', {name: 'QA Practice Lab'})).toBeVisible();
 expect(page.getByRole('heading', {name: 'Bài 1 — Form đăng nhập có Captcha'})).toBeVisible();
 expect(page.getByRole('heading', {name: 'Bài 2 — Form Reset Password'})).toBeVisible();
 expect(page.getByRole('link', {name: 'Đăng nhập'})).toBeVisible();
 expect(page.getByRole('link', {name: 'Đăng ký'})).toBeVisible();
/*TARGET 2: https://baitap.itlearn.edu.vn/exercise.php?id=1
Yeu cau :
Tim noi dung cac element ://a[@href="/login.php"]
- Quay lai muc luc: .exercise-header__back
- Header  Bài 1 — Form đăng nhập có Captcha: //h2[contains(text(),'Bài 1')]
- Cac tag De, #form, #login, #validation, #captcha: .exercise-header__meta
- Element tab De bai, Form thuc hanh, Nop bai: .tabs__nav
- Thong tin trong tab De bai: .tabs__btn.is-active */ 
//YEU CAU: Sau khi tim xpath, chuyen sang get by role de thuc hien tim element visible
expect(page.getByRole('link', {name: 'Đăng nhập'})).toBeVisible();
expect(page.getByRole('link', {name: 'Quay lại mục lục'})).toBeVisible();
expect(page.getByRole('heading', { name: /Bài 1/ }).toBeVisible());
expect(page.locator('.exercise-header__meta')).toBeVisible();
expect(page.getByRole('tab', {name:'Đề bài' })).toBeVisible();