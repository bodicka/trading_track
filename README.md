<h1 align="center">📈 Trading Track</h1>

<p align="center">

Trading Track — современное веб-приложение для отслеживания финансовых активов. Пользователь может зарегистрироваться, управлять собственным Watchlist, искать компании, просматривать детальную информацию об акциях, анализировать графики TradingView и работать с персональным кабинетом.

Проект разработан на базе Next.js 16 с использованием App Router, Better Auth, MongoDB и современных возможностей React Server Components.

</p>

---

<h3 align="center">🎥 Project Demo</h3>

<p align="center">
Нажмите на изображение ниже, чтобы посмотреть полную демонстрацию приложения.
</p>

<p align="center">
<a href="#">
    <img src="https://skrinshoter.ru/s/070826/THbI0v6h.jpg?download=1&name=%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82-07-08-2026%2017:28:37.jpg" width="900" alt="Trading Track Demo"/>
</a>
</p>

<p align="center">
<b>▶ Watch Full Demo on YouTube</b>
</p>

---

<h2 align="center">🛠️ Технологический стек</h2>

<p align="center">

<table align="center">
<tr>
<td align="center" width="120">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" height="60"/><br>
<b>Next.js 16</b>
</td>

<td align="center" width="120">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" height="60"/><br>
<b>React 19</b>
</td>

<td align="center" width="120">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" height="60"/><br>
<b>TypeScript</b>
</td>

<td align="center" width="120">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" height="60"/><br>
<b>Tailwind CSS</b>
</td>

<td align="center" width="120">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg" height="60"/><br>
<b>MongoDB</b>
</td>
</tr>

<tr>
<td align="center" width="120">
<img src="https://images.seeklogo.com/logo-png/65/1/better-auth-logo-png_seeklogo-653267.png" height="60"/><br>
<b>Better Auth</b>
</td>

<td align="center" width="120">
<img src="https://react-hook-form.com/images/logo/react-hook-form-logo-only.svg" height="60"/><br>
<b>React Hook Form</b>
</td>

<td align="center" width="120">
<img src="https://zod.dev/_next/image?url=%2Flogo%2Flogo-glow.png&w=256&q=100" height="60"/><br>
<b>Zod</b>
</td>

<td align="center" width="120">
<img src="https://images.seeklogo.com/logo-png/65/1/inngest-logo-png_seeklogo-653438.png" height="60"/><br>
<b>Inngest</b>
</td>

<td align="center" width="120">
<img src="https://i.pinimg.com/736x/87/08/1e/87081ed023df23521c5f314e97f7b2d0.jpg" height="60"/><br>
<b>TradingView</b>
</td>
</tr>
</table>

</p>

<hr>
<br>

<div align="left">
  <h4 align="left">1. Next.js 16 - <img align="center" gap="10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="nextjs-logo" height="40" /><img width="12" /></h4>
  <hr>
  <p>
    Next.js — это React-фреймворк для создания быстрых и масштабируемых веб-приложений с серверной частью, маршрутизацией и App Router. В этом проекте он используется как основа всего приложения: маршрутизация, layout, серверные компоненты и API-маршруты.
  </p>
</div>

```tsx
// app/(root)/page.tsx
export default function HomePage() {
  return <main>Dashboard</main>;
}
```

<div align="left">
  <p>Этот файл является частью маршрутов Next.js и отвечает за отображение главной страницы приложения.</p>
</div>

<hr>
<br>

<div align="left">
  <h4 align="left">2. React 19 - <img align="center" gap="10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="react-logo" height="35" /><img width="12" /></h4>
  <hr>
  <p>
    React используется для построения интерфейса приложения. Благодаря компонентному подходу в проекте реализованы header, формы, search, карточки акций и виджеты TradingView.
  </p>
</div>

```tsx
// components/TradingViewWidget.tsx
const TradingViewWidget = ({ title, scriptUrl, config, height = 600 }) => {
  return <div>{title && <h3>{title}</h3>}</div>;
};
```

<div align="left">
  <p>Такой компонент позволяет переиспользовать UI-виджеты и выводить их на разных страницах приложения.</p>
</div>

<hr>
<br>

<div align="left">
  <h4 align="left">3. TypeScript - <img align="center" gap="10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="typescript-logo" height="35" /><img width="12" /></h4>
  <hr>
  <p>
    TypeScript добавляет строгую типизацию в проект, что снижает количество ошибок при разработке и делает код более безопасным и понятным.
  </p>
</div>

```ts
// lib/actions/auth.actions.ts
export const signInEmailFunctions = async ({ email, password }: SignInFormData) => {
  return { success: true, data: { email, password } };
};
```

<div align="left">
  <p>Типы помогают контролировать данные, которые приходят из формы входа и регистрации.</p>
</div>

<hr>
<br>

<div align="left">
  <h4 align="left">4. Tailwind CSS - <img align="center" gap="10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="tailwind-logo" height="35" /><img width="12" /></h4>
  <hr>
  <p>
    Tailwind CSS используется для стилизации интерфейса без необходимости писать отдельные CSS-файлы для каждого компонента. В проекте он применяется для создания современного темного дизайна, форм, header и карточек.
  </p>
</div>

```tsx
<button className="yellow-btn w-full mt-5">Sign In</button>
```

<div align="left">
  <p>Через Tailwind задаются отступы, ширина, цветовые стили и визуальное поведение элементов интерфейса.</p>
</div>

<hr>
<br>

<div align="left">
  <h4 align="left">5. MongoDB - <img align="center" gap="10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg" alt="mongodb-logo" height="35" /><img width="12" /></h4>
  <hr>
  <p>
    MongoDB используется как база данных для хранения пользовательских данных и связанных с ними данных авторизации. В проекте подключение осуществляется через Mongoose и адаптер для Better Auth.
  </p>
</div>

```ts
// database/mongoose.ts
export const conectDataBase = async () => {
  return mongoose.connect(process.env.MONGODB_URI!);
};
```

<div align="left">
  <p>Этот код обеспечивает подключение приложения к MongoDB перед работой с пользователями и сессиями.</p>
</div>

<hr>
<br>

<div align="left">
  <h4 align="left">6. Better Auth - <img align="center" gap="10" src="https://images.seeklogo.com/logo-png/65/1/better-auth-logo-png_seeklogo-653267.png" alt="better-auth-logo" height="35" /><img width="12" /></h4>
  <hr>
  <p>
    Better Auth используется для регистрации, входа и управления сессиями пользователей. Это облегчает интеграцию аутентификации без написания полноценной собственной backend-логики.
  </p>
</div>

```ts
// lib/better-auth/auth.ts
export const auth = await getAuth();
```

<div align="left">
  <p>Через эту конфигурацию приложение получает доступ к API регистрации, входа и работы с текущей сессией пользователя.</p>
</div>

<hr>
<br>

<div align="left">
  <h4 align="left">7. React Hook Form - <img align="center" gap="10" src="https://react-hook-form.com/images/logo/react-hook-form-logo-only.svg" alt="react-hook-form-logo" height="35" /><img width="12" /></h4>
  <hr>
  <p>
    React Hook Form применяется для удобной работы с формами регистрации и входа. Библиотека помогает управлять состоянием полей, валидацией и отправкой данных.
  </p>
</div>

```tsx
const { register, handleSubmit } = useForm<SignInFormData>();
```

<div align="left">
  <p>Благодаря такому подходу формы становятся проще, чище и удобнее для поддержки.</p>
</div>

<hr>
<br>

<div align="left">
  <h4 align="left">8. Zod - <img align="center" gap="10" src="https://zod.dev/_next/image?url=%2Flogo%2Flogo-glow.png&w=256&q=100" alt="zod-logo" height="35" /><img width="12" /></h4>
  <hr>
  <p>
    Zod используется для валидации данных. В проекте он помогает проверять корректность входных данных из форм и защищать приложение от некорректного ввода.
  </p>
</div>

```ts
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
```

<div align="left">
  <p>Такая схема гарантирует, что данные соответствуют ожидаемому формату перед отправкой.</p>
</div>

<hr>
<br>

<div align="left">
  <h4 align="left">9. Inngest - <img align="center" gap="10" src="https://images.seeklogo.com/logo-png/65/1/inngest-logo-png_seeklogo-653438.png" alt="inngest-logo" height="35" /><img width="12" /></h4>
  <hr>
  <p>
    Inngest используется для фоновой обработки событий, например отправки приветственного письма после регистрации. Он помогает вынести такие задачи из основного пользовательского потока.
  </p>
</div>

```ts
// app/api/inngest/route.ts
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [sendSignUpEmail],
});
```

<div align="left">
  <p>Здесь запускается обработка события регистрации и выполняется последующая бизнес-логика.</p>
</div>

<hr>
<br>

<div align="left">
  <h4 align="left">10. TradingView - <img align="center" gap="10" src="https://i.pinimg.com/736x/87/08/1e/87081ed023df23521c5f314e97f7b2d0.jpg" alt="tradingview-logo" height="35" /><img width="12" /></h4>
  <hr>
  <p>
    TradingView интегрируется в проект для отображения финансовых графиков, новостей, heatmap и анализа рынка. Благодаря этому пользователь может смотреть актуальные биржевые данные прямо в интерфейсе приложения.
  </p>
</div>

```tsx
// components/TradingViewWidget.tsx
const containerRef = useTradingViewWidget(scriptUrl, config, height);
```

<div align="left">
  <p>Этот код динамически подключает виджет TradingView и отображает нужный график или панель в зависимости от конфигурации.</p>
</div>

---
