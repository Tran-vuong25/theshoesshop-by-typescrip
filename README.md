npm i react-redux @reduxjs/toolkit react-router-dom axios antd formit yup
npm i sass prettier -D

## --save: cài những thư viện chỉ cần cho production (Dành cho người dùng)

npm i react --save: Những phiên bản cũ không cần thiết thêm --save

## --save-dev: cài những thư viện chỉ cần ở local, dev (Dành cho dev)

npm i prettier --save-dev
npm i prettier -D

## prettier: fomart code

## eslint: rule của project

## layout: giống nhau, khác compoenent

# React Router Dom

- NavLink: Dùng khi muốn active thẻ và di chuyển giữa các trang.
- Link: Di chuyển giữa các trang
- useNavigate: Kiểm tra điều kiện rồi mới di chuyển giữa các trang web

## SetUp tailwindcss

`https://tailwindcss.com/docs/installation/using-postcss`

1. npm install -D tailwindcss postcss autoprefixer: Cài đặt tailwindcss
2. npx tailwindcss init: Tự động tạo file tailwind.config.js
3. tạo file postcss.config.js:
4. chỉnh sữa content: trong file tailwind.config.cjs
5. import nội dung

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
/*vào bất cứ file css global trong dự án */
```

6. tạo css mà tailwind chưa có sẵn

```html
<div class="px-[-- Nơi đặt giá trị muốn Custom --]"></div>
```
