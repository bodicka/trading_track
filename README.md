<h1 align="center">📈 Trading Track</h1>

<p align="center">

Trading Track — современное веб-приложение для отслеживания финансовых активов. Пользователь может зарегистрироваться, управлять собственным Watchlist, искать компании, просматривать детальную информацию об акциях, анализировать графики TradingView и работать с персональным кабинетом.

Проект разработан на базе Next.js 16 с использованием App Router, Better Auth, MongoDB и современных возможностей React Server Components.

</p>

# 📑 Содержание

- [🎥 Демонстрация проекта](#-демонстрация-проекта)
- [🏗️ Архитектура проекта](#️-архитектура-проекта)
- [🛠️ Технологический стек](#️-технологический-стек)
- [⚙️ Архитектурные решения](#️-архитектурные-решения)
  - [Почему App Router?](#почему-app-router)
  - [Почему Better Auth?](#почему-better-auth)
  - [Почему MongoDB?](#почему-mongodb)
  - [Почему Inngest?](#почему-inngest)
- [📬 Контакты](#️-контакты)
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

# 🏗️ Архитектура проекта

```text
                          ┌──────────────────────────────┐
                          │      Next.js 16 App Router   │
                          │ React Server Components (RSC)│
                          └───────────────┬──────────────┘
                                          │
          ┌───────────────────────────────┼───────────────────────────────┐
          │                               │                               │
          ▼                               ▼                               ▼
 ┌──────────────────┐           ┌──────────────────┐            ┌──────────────────┐
 │   UI Components  │           │  Server Actions  │            │   Better Auth    │
 │     (React)      │           │ Business Logic   │            │ Authentication   │
 └─────────┬────────┘           └─────────┬────────┘            └─────────┬────────┘
           │                              │                               │
           └──────────────┬───────────────┴───────────────┬───────────────┘
                          │                               │
                          ▼                               ▼
                 ┌──────────────────┐          ┌──────────────────┐
                 │     MongoDB      │          │ Yahoo Finance API│
                 │    (Mongoose)    │          │  Trading Data    │
                 └─────────┬────────┘          └─────────┬────────┘
                           │                             │
                           └──────────────┬──────────────┘
                                          ▼
                              ┌────────────────────────┐
                              │ TradingView Widgets    │
                              │ Interactive Charts     │
                              └────────────────────────┘

                          ⚙️ Inngest
               Фоновые задачи • Email • События
```

### Основные компоненты

- **Next.js App Router** — основа архитектуры приложения и маршрутизации.
- **React Server Components** — выполнение серверной логики без лишнего JavaScript на клиенте.
- **Server Actions** — взаимодействие клиента и сервера без создания REST API.
- **Better Auth** — регистрация пользователей, аутентификация и управление сессиями.
- **MongoDB + Mongoose** — хранение пользователей, Watchlist и других данных приложения.
- **Yahoo Finance API** — получение актуальной информации о финансовых инструментах.
- **TradingView Widget** — отображение интерактивных графиков акций.
- **Inngest** — выполнение фоновых задач и обработка событий.

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
    MongoDB — это NoSQL-база данных, которая хранит данные в формате документов JSON-like. В этом проекте она используется как основное хранилище для авторизации и пользовательских данных. Благодаря MongoDB приложение может быстро работать с данными пользователя, а также удобно масштабироваться при добавлении новых сущностей.
  </p>
  <p>
    В проекте MongoDB подключается через Mongoose, который добавляет схему, модели и удобный уровень абстракции над коллекциями. Это особенно полезно для работы с auth-сессиями, пользователями и будущими расширениями проекта.
  </p>
</div>

```ts
// database/mongoose.ts
export const conectDataBase = async () => {
  return mongoose.connect(process.env.MONGODB_URI!);
};
```

<div align="left">
  <p>
    Этот фрагмент выполняет подключение к MongoDB при запуске приложения. После этого Better Auth может использовать базу для хранения пользователей, сессий и связанных данных.
  </p>
</div>

<hr>
<br>

<div align="left">
  <h4 align="left">6. Better Auth - <img align="center" gap="10" src="https://images.seeklogo.com/logo-png/65/1/better-auth-logo-png_seeklogo-653267.png" alt="better-auth-logo" height="35" /><img width="12" /></h4>
  <hr>
  <p>
    Better Auth — это современная библиотека для аутентификации в Next.js и React-приложениях. Она решает задачи регистрации, входа по email/password, управления сессиями и работы с cookies. В этом проекте она является ключевым инструментом для защиты маршрутов и персонализированного доступа к интерфейсу.
  </p>
  <p>
    Благодаря Better Auth разработчику не нужно вручную писать собственную систему логина и хранения сессий. Библиотека берёт на себя логику создания пользователя, проверки пароля, управления токенами и сессиями.
  </p>
</div>

```ts
// lib/better-auth/auth.ts
export const getAuth = async () => {
  const mongoose = await conectDataBase();
  const db = mongoose.connection.db;

  authInstance = betterAuth({
    database: mongodbAdapter(db),
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: process.env.BETTER_AUTH_URL,
    emailAndPassword: {
      enabled: true,
      disableSignUp: false,
      requireEmailVerification: false,
      minPasswordLength: 8,
      autoSignIn: true,
    },
    plugins: [nextCookies()],
  });

  return authInstance;
};
```

<div align="left">
  <p>
    В этом фрагменте создаётся экземпляр Better Auth, который подключается к MongoDB через адаптер и настраивает email/password-авторизацию. После этого этот экземпляр используется в серверных действиях и в layout для проверки текущей сессии пользователя.
  </p>
</div>

<hr>
<br>

<div align="left">
  <h4 align="left">7. React Hook Form - <img align="center" gap="10" src="https://react-hook-form.com/images/logo/react-hook-form-logo-only.svg" alt="react-hook-form-logo" height="35" /><img width="12" /></h4>
  <hr>
  <p>
    React Hook Form — это библиотека для работы с формами в React, которая помогает управлять состоянием полей, валидацией и отправкой данных без лишнего кода. В проекте она используется в формах регистрации и входа, где нужно быстро получать данные пользователя и проверять их корректность.
  </p>
  <p>
    В отличие от обычного управляемого состояния, здесь логика формы становится проще и понятнее. Разработчику не нужно вручную писать много обработчиков для каждого input — достаточно зарегистрировать поле и передать его в handleSubmit.
  </p>
</div>

```tsx
// app/(auth)/sign-in/page.tsx
const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignInFormData>();

const onSubmit = async (data: SignInFormData) => {
  const result = await signInEmailFunctions(data);
  if (result.success) router.push("/");
};
```

<div align="left">
  <p>
    В этом примере React Hook Form собирает данные из формы, передаёт их в обработчик onSubmit и затем вызывает серверное действие для входа. Благодаря этому код формы остаётся компактным, а логика валидации и отправки данных вынесена в понятный и безопасный поток.
  </p>
</div>

<hr>
<br>

<div align="left">
  <h4 align="left">8. Zod - <img align="center" gap="10" src="https://zod.dev/_next/image?url=%2Flogo%2Flogo-glow.png&w=256&q=100" alt="zod-logo" height="35" /><img width="12" /></h4>
  <hr>
  <p>
    Zod — это библиотека для строгой валидации данных в TypeScript. Она позволяет описывать структуру данных и автоматически проверять, что входные значения соответствуют ожидаемому формату. В этом проекте Zod особенно полезен для форм регистрации и входа, где важно убедиться, что email, пароль и другие значения корректны перед отправкой на сервер.
  </p>
  <p>
    Благодаря Zod приложение получает дополнительный уровень защиты: если пользователь отправил пустое поле, слишком короткий пароль или невалидный email, такие данные не пройдут проверку и будут отклонены ещё до выполнения логики приложения.
  </p>
</div>

```ts
// Пример структуры данных формы
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
```

<div align="left">
  <p>
    В реальном сценарии эта схема помогает проверить, что email имеет корректный формат, а пароль не меньше 8 символов. Если данные не проходят проверку, запрос не отправляется дальше, и приложение не получает некорректную информацию.
  </p>
</div>

<hr>
<br>

<div align="left">
  <h4 align="left">9. Inngest - <img align="center" gap="10" src="https://images.seeklogo.com/logo-png/65/1/inngest-logo-png_seeklogo-653438.png" alt="inngest-logo" height="35" /><img width="12" /></h4>
  <hr>
  <p>
    Inngest — это инструмент для работы с фоновыми событиями и job-обработкой. Он позволяет запускать задачи после определённых действий пользователя, не блокируя основной интерфейс. В этом проекте он используется после регистрации: как только пользователь создаёт аккаунт, система создаёт событие, а Inngest запускает обработку приветственного письма.
  </p>
  <p>
    Такая архитектура полезна тем, что регистрация не “зависает” на отправке письма, а вся дополнительная логика выполняется в фоне. Это делает приложение быстрее и надёжнее, особенно если внешняя интеграция, например Resend или Yandex GPT, работает медленно.
  </p>
</div>

```ts
// app/api/inngest/route.ts
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [sendSignUpEmail],
});
```

```ts
// lib/actions/auth.actions.ts
await inngest.send({
  name: "app/user.created",
  data: {
    email,
    name: fullName,
    country,
    investmentGoals,
    riskTolerance,
    preferredIndustry,
  },
});
```

<div align="left">
  <p>
    После регистрации проект отправляет событие app/user.created в Inngest. Это запускает фоновую обработку, где генерируется приветственный текст и отправляется письмо. Благодаря этому пользовательский поток не тормозится и остаётся быстрым и понятным.
  </p>
</div>

<hr>
<br>

<div align="left">
  <h4 align="left">10. TradingView - <img align="center" gap="10" src="https://i.pinimg.com/736x/87/08/1e/87081ed023df23521c5f314e97f7b2d0.jpg" alt="tradingview-logo" height="35" /><img width="12" /></h4>
  <hr>
  <p>
    TradingView — это популярная платформа для финансовых графиков и анализа рынка. В проекте она используется как визуальный слой для отображения актуальных данных по акциям, новостям, heatmap и различным техническим инструментам. Благодаря этой интеграции интерфейс приложения становится похожим на полноценную финансовую панель.
  </p>
  <p>
    В проекте виджеты подключаются динамически: приложение подгружает внешний скрипт TradingView и передаёт нужную конфигурацию, например символ акции, период графика или тип панели. Это позволяет использовать один и тот же компонент на разных страницах: на главной для обзора рынка и на странице конкретной акции для детального анализа.
  </p>
</div>

```tsx
// components/TradingViewWidget.tsx
const TradingViewWidget = ({ title, scriptUrl, config, height = 600 }) => {
  const containerRef = useTradingViewWidget(scriptUrl, config, height);

  return (
    <div className="w-full">
      {title && <h3>{title}</h3>}
      <div ref={containerRef} className="tradingview-widget-container" />
    </div>
  );
};
```

```tsx
// hooks/useTradingViewWidget.tsx
const script = document.createElement("script");
script.src = scriptUrl;
script.async = true;
script.innerHTML = JSON.stringify(config);
containerRef.current.appendChild(script);
```

<div align="left">
  <p>
    В этом примере видно, как приложение подгружает TradingView-скрипт на страницу и передаёт ему конфигурацию виджета. Такой подход позволяет использовать один и тот же компонент для разных панелей: market overview, heatmap, технический анализ и другие.
  </p>
</div>

---

<h2 align="center">🏗️ Архитектурные решения</h2>

<p align="left">
  В процессе разработки я сознательно выбирал технологии не только по внешней популярности, но и по тому, насколько они подходят именно для этого проекта. Ниже — архитектурные решения, которые определили структуру приложения и стиль его разработки.
</p>

<hr>
<br>

<div align="left">
  <h4 align="left">Почему Better Auth?</h4>
  <hr>
  <p>
    Для авторизации я выбрал Better Auth, потому что он позволяет быстро и безопасно внедрить регистрацию, вход по email/password и управление сессиями без необходимости писать собственную систему аутентификации с нуля.
  </p>
</div>

```ts
// lib/better-auth/auth.ts
export const getAuth = async () => {
  const mongoose = await conectDataBase();
  const db = mongoose.connection.db;

  authInstance = betterAuth({
    database: mongodbAdapter(db),
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: process.env.BETTER_AUTH_URL,
    emailAndPassword: {
      enabled: true,
      disableSignUp: false,
      requireEmailVerification: false,
      minPasswordLength: 8,
      autoSignIn: true,
    },
    plugins: [nextCookies()],
  });

  return authInstance;
};
```

<div align="left">
  <p>
    Этот код показывает, почему Better Auth был выбран: он сразу даёт готовую инфраструктуру для auth, интеграции с MongoDB и работы с cookies в Next.js.
  </p>
</div>

<hr>
<br>

<div align="left">
  <h4 align="left">Почему MongoDB?</h4>
  <hr>
  <p>
    MongoDB был выбран как база данных, потому что проект работает с гибкими и быстро меняющимися данными: пользователями, сессиями и будущими расширениями. Документная модель данных здесь удобнее, чем сложная SQL-структура.
  </p>
</div>

```ts
// database/mongoose.ts
export const conectDataBase = async () => {
  return mongoose.connect(process.env.MONGODB_URI!);
};
```

<div align="left">
  <p>
    Подключение к MongoDB через Mongoose позволяет приложению работать с базой данных как с частью общей архитектуры, не раздувая проект лишними слоями.
  </p>
</div>

<hr>
<br>

<div align="left">
  <h4 align="left">Почему App Router?</h4>
  <hr>
  <p>
    App Router был выбран, потому что проект строится на современных возможностях Next.js: маршрутизация через папки, layout, серверные компоненты и удобная организация структуры приложения.
  </p>
</div>

```text
app/
  (auth)/sign-in/page.tsx
  (auth)/sign-up/page.tsx
  (root)/page.tsx
  (root)/stock/[symbol]/page.tsx
  api/inngest/route.ts
```

<div align="left">
  <p>
    Такая структура делает проект понятным: UI-страницы, защищённые маршруты и API-эндпоинты живут в логически разделённых частях приложения.
  </p>
</div>

<hr>
<br>

<div align="left">
  <h4 align="left">Почему Server Actions?</h4>
  <hr>
  <p>
    Server Actions были выбраны, чтобы не создавать лишние REST API для простых операций. В проекте это особенно удобно для регистрации, входа и других пользовательских действий.
  </p>
</div>

```ts
// lib/actions/auth.actions.ts
export const signUpEmailFunctions = async ({ email, password, fullName }: SignUpFormData) => {
  const response = await auth.api.signUpEmail({
    body: { email, password, name: fullName },
  });

  return { success: true, data: response };
};
```

<div align="left">
  <p>
    Такой подход позволяет вызывать серверную логику прямо из компонентов, не добавляя отдельные API-роуты для каждого действия.
  </p>
</div>

<hr>
<br>

<div align="left">
  <h4 align="left">Почему Inngest?</h4>
  <hr>
  <p>
    Inngest был выбран для фоновых операций, потому что отправка письма и генерация контента — это задачи, которые не должны блокировать основную регистрацию пользователя.
  </p>
</div>

```ts
// lib/actions/auth.actions.ts
await inngest.send({
  name: "app/user.created",
  data: {
    email,
    name: fullName,
    country,
    investmentGoals,
    riskTolerance,
    preferredIndustry,
  },
});
```

<div align="left">
  <p>
    Благодаря этому пользователь сразу получает результат регистрации, а дополнительные процессы выполняются асинхронно в фоне.
  </p>
</div>

<hr>
<br>

<div align="left">
  <h4 align="left">Почему TradingView?</h4>
  <hr>
  <p>
    TradingView был выбран как готовое решение для финансовых графиков, потому что он даёт профессиональные виджеты без необходимости строить сложную аналитическую систему с нуля.
  </p>
</div>

```tsx
// hooks/useTradingViewWidget.tsx
const script = document.createElement("script");
script.src = scriptUrl;
script.async = true;
script.innerHTML = JSON.stringify(config);
containerRef.current.appendChild(script);
```

<div align="left">
  <p>
    Такой подход позволяет быстро и гибко интегрировать настраиваемые финансовые панели прямо в интерфейс приложения.
  </p>
</div>
---
---

# 🎯 Заключение

**Trading Track** — это полноценный веб-проект, в котором я реализовал не только пользовательский интерфейс, но и серверную логику, аутентификацию, работу с базой данных, интеграцию внешних API и фоновые задачи.

В процессе разработки я получил практический опыт работы с **Next.js App Router, React Server Components, Server Actions, Better Auth, MongoDB, Inngest и TradingView**, а также уделил внимание разделению ответственности между компонентами и серверной логикой.

Проект стал практической площадкой для применения современных подходов к разработке full-stack приложений на TypeScript и Next.js.

Спасибо за просмотр проекта!  
Буду рад обратной связи и новым идеям по его развитию.

---

# 📬 Контакты

<p align="center">

<a href="https://github.com/bodicka">
  <img src="https://img.shields.io/badge/GitHub-bodicka-181717?style=for-the-badge&logo=github" alt="GitHub"/>
</a>

<a href="https://t.me/bogdasha03">
  <img src="https://img.shields.io/badge/Telegram-Contact-26A5E4?style=for-the-badge&logo=telegram" alt="Telegram"/>
</a>

<a href="mailto:pagboty@mail.ru">
  <img src="https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/>
</a>
</p>

<p align="center">
⭐ Если проект был интересен, буду рад вашей поддержке!
</p>

---
