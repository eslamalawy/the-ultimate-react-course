# 32 Overview Of Next.Js With The App Router Gallery

## Images

- [30 01 Client Side Rendering (Csr) Vs Server Side Rendering (Ssr)](#30-01-client-side-rendering-(csr)-vs-server-side-rendering-(ssr))
- [30 02 When To Use Csr And Ssr](#30-02-when-to-use-csr-and-ssr)
- [30 03 Typical Timeline Of Csr Vs Ssr With Data Fetching](#30-03-typical-timeline-of-csr-vs-ssr-with-data-fetching)
- [30 04 What Is Hydration](#30-04-what-is-hydration)
- [30 05 What Is Nextjs](#30-05-what-is-nextjs)
- [30 06 The Next Js Key Ingredients](#30-06-the-next-js-key-ingredients)
- [30 07 App Router And Legacy Next Js Pages Router](#30-07-app-router-and-legacy-next-js-pages-router)
- [30 08 Why React Server Components](#30-08-why-react-server-components)
- [30 09 What Are React Server Components](#30-09-what-are-react-server-components)
- [30 10 An Example + The Server And Client Boundaries](#30-10-an-example-+-the-server-and-client-boundaries)
- [30 11 Server Components Vs Client Components](#30-11-server-components-vs-client-components)
- [30 12 A Simple New Mental Model Rsc](#30-12-a-simple-new-mental-model-rsc)
- [30 13 The Good And Bad Of The Rsc Architecture](#30-13-the-good-and-bad-of-the-rsc-architecture)
- [30 14 Quick Review Of Rendering In React](#30-14-quick-review-of-rendering-in-react)
- [30 15 How Rsc Works Behind The Scenes](#30-15-how-rsc-works-behind-the-scenes)
- [30 16 A Simplified Review About Rsc And Traditional React](#30-16-a-simplified-review-about-rsc-and-traditional-react)
- [30 17 The Relationship Between Rsc And Ssr](#30-17-the-relationship-between-rsc-and-ssr)

---

## 30 01 Client Side Rendering (Csr) Vs Server Side Rendering (Ssr)

![30 01 Client Side Rendering (Csr) Vs Server Side Rendering (Ssr)](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/32 Overview of Next.js With the App Router/30-01%20Client-side%20rendering%20%28CSR%29%20vs%20Server-Side%20Rendering%20%28SSR%29.png)

---

## 30 02 When To Use Csr And Ssr

![30 02 When To Use Csr And Ssr](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/32 Overview of Next.js With the App Router/30-02%20When%20to%20use%20CSR%20And%20SSR.png)

---

## 30 03 Typical Timeline Of Csr Vs Ssr With Data Fetching

![30 03 Typical Timeline Of Csr Vs Ssr With Data Fetching](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/32 Overview of Next.js With the App Router/30-03%20Typical%20TimeLine%20of%20CSR%20vs%20SSR%20with%20data%20fetching.png)

---

## 30 04 What Is Hydration

![30 04 What Is Hydration](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/32 Overview of Next.js With the App Router/30-04%20what%20is%20hydration.png)

---

## 30 05 What Is Nextjs

![30 05 What Is Nextjs](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/32 Overview of Next.js With the App Router/30-05%20what%20is%20nextjs.png)

---

## 30 06 The Next Js Key Ingredients

![30 06 The Next Js Key Ingredients](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/32 Overview of Next.js With the App Router/30-06%20the%20next%20js%20key%20ingredients.png)

---

## 30 07 App Router And Legacy Next Js Pages Router

![30 07 App Router And Legacy Next Js Pages Router](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/32 Overview of Next.js With the App Router/30-07%20app%20router%20and%20legacy%20next%20js%20pages%20router.png)

---

## 30 08 Why React Server Components

![30 08 Why React Server Components](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/32 Overview of Next.js With the App Router/30-08%20why%20react%20server%20components.png)

---

## 30 09 What Are React Server Components

![30 09 What Are React Server Components](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/32 Overview of Next.js With the App Router/30-09%20what%20are%20react%20server%20components.png)

---

## 30 10 An Example + The Server And Client Boundaries

![30 10 An Example + The Server And Client Boundaries](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/32 Overview of Next.js With the App Router/30-10%20An%20example%20%2B%20the%20server%20and%20client%20boundaries.png)

---

## 30 11 Server Components Vs Client Components

![30 11 Server Components Vs Client Components](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/32 Overview of Next.js With the App Router/30-11%20server%20components%20vs%20client%20components.png)

---

## 30 12 A Simple New Mental Model Rsc

![30 12 A Simple New Mental Model Rsc](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/32 Overview of Next.js With the App Router/30-12%20a%20simple%20new%20mental%20model%20RSC.png)

---

## 30 13 The Good And Bad Of The Rsc Architecture

![30 13 The Good And Bad Of The Rsc Architecture](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/32 Overview of Next.js With the App Router/30-13%20the%20good%20and%20bad%20of%20the%20RSC%20ARCHITECTURE.png)

---

## 30 14 Quick Review Of Rendering In React

![30 14 Quick Review Of Rendering In React](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/32 Overview of Next.js With the App Router/30-14%20quick%20review%20of%20rendering%20in%20react.png)

---

## 30 15 How Rsc Works Behind The Scenes

![30 15 How Rsc Works Behind The Scenes](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/32 Overview of Next.js With the App Router/30-15%20how%20RSC%20WORKS%20Behind%20the%20SCENES.png)

---

## 30 16 A Simplified Review About Rsc And Traditional React

![30 16 A Simplified Review About Rsc And Traditional React](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/32 Overview of Next.js With the App Router/30-16%20A%20SIMPLIFIED%20Review%20about%20RSC%20and%20traditional%20React.png)

---

## 30 17 The Relationship Between Rsc And Ssr

![30 17 The Relationship Between Rsc And Ssr](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/32 Overview of Next.js With the App Router/30-17%20the%20relationship%20between%20RSC%20and%20SSR.png)

---

