# Sultan Web

E-commerce платформа (учебно-практический проект).  
Фронтенд на **Next.js + React + TypeScript**, стилизация через **SCSS** и **i18n** для мультиязычности.

## 🚀 Фичи
- Next.js
- Адаптивная верстка (SCSS + CSS variables)
- Локализация через `next-intl`
- Каталог товаров с фильтрами и карточками
- Корзина и страницы товара
- Деплой через Vercel

## 📂 Структура проекта
```text
sultan-web/
 ├─ public/           # статика (изображения, json-данные)
 ├─ src/
 │   ├─ components/   # UI-компоненты
 │   ├─ pages/        # маршруты Next.js
 │   ├─ styles/       # SCSS (в т.ч. vars.scss, mixins.scss)
 │   └─ locales/      # i18n ресурсы
 ├─ package.json
 └─ README.md
```

## 🛠️ Установка и запуск

### Локально
```bash
git clone https://github.com/UsachevDev/sultan-web.git
cd sultan-web

npm install
pnpm run dev
```
Приложение доступно на `http://localhost:3000`.

### Production билд
```bash
npm run build
npm run start
```

## 🌐 Деплой

### Vercel
1. Импортируй репозиторий на [vercel.com](https://vercel.com/).
2. Укажи:
   - Framework: **Next.js**
   - Package manager: **pnpm**
   - Build command: `npm run build`
   - Install command: `npm install --frozen-lockfile`
   - Output: `.next`

## 👨‍💻 Авторы
- [Усачев Илья](https://github.com/UsachevDev)
- [Закарян Станислав](https://github.com/AtomST)
- [Чайкин Николай](https://github.com/nikolaichaikin)  

---

📌 Проект сделан в команде как практика.
