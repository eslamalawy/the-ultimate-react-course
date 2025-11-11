# 11 How React Works Behind The Scenes Gallery

## Images

- [07 01 Component](#07-01-component)
- [07 02 Component Instance](#07-02-component-instance)
- [07 03 React Element](#07-03-react-element)
- [07 04 Dom Element (Html)](#07-04-dom-element-(html))
- [08 01 Component Instance](#08-01-component-instance)
- [08 02 How Component Is Displayed](#08-02-how-component-is-displayed)
- [08 03 How Render Triggered](#08-03-how-render-triggered)
- [09 01 Facts](#09-01-facts)
- [09 02 Render Phase Steps](#09-02-render-phase-steps)
- [09 03 Update A Single Component](#09-03-update-a-single-component)
- [09 04 Update The Root A](#09-04-update-the-root-a)
- [09 05 React Play Safe To Regenerate The Dom](#09-05-react-play-safe-to-regenerate-the-dom)
- [09 06 Reconciler (Fiber)](#09-06-reconciler-(fiber))
- [09 07 What Is Reconciliation And Why Do We Need It](#09-07-what-is-reconciliation-and-why-do-we-need-it)
- [09 08 Fiber Overview](#09-08-fiber-overview)
- [09 09 How Fiber Works](#09-09-how-fiber-works)
- [09 10 Render Phase After Fiber Done](#09-10-render-phase-after-fiber-done)
- [10 01 The Commit Phase And Browser Paint](#10-01-the-commit-phase-and-browser-paint)
- [10 02 Renderers Concept](#10-02-renderers-concept)
- [10 03 Putting It All Together](#10-03-putting-it-all-together)
- [11 01 Diffing](#11-01-diffing)
- [11 02 Diffing For Same Position Diferent Element](#11-02-diffing-for-same-position-diferent-element)
- [11 03 Diffing For Same Position Same Element](#11-03-diffing-for-same-position-same-element)
- [12 01 What Is The Key Prop](#12-01-what-is-the-key-prop)
- [12 02 Why It Is Good To Use The Key Prop](#12-02-why-it-is-good-to-use-the-key-prop)
- [12 03 Key Prop Resets The State](#12-03-key-prop-resets-the-state)
- [13 01 Logic In React Components](#13-01-logic-in-react-components)
- [13 02 Pure Vs Impure Functions](#13-02-pure-vs-impure-functions)
- [13 03 Rules For Render Logic](#13-03-rules-for-render-logic)
- [14 01 Batched State Updates](#14-01-batched-state-updates)
- [14 02 The Problem Itself](#14-02-the-problem-itself)
- [14 03 How Batch Works](#14-03-how-batch-works)
- [14 04 What Will Be The Value Of State](#14-04-what-will-be-the-value-of-state)
- [14 05 Versions Of React That Support Batching](#14-05-versions-of-react-that-support-batching)
- [15 01 Event Propagation And Delegation](#15-01-event-propagation-and-delegation)
- [15 02 How React Handles Events](#15-02-how-react-handles-events)
- [15 03 Synthetic Events](#15-03-synthetic-events)
- [16 01 Library Vs Framework And React Ecosystem](#16-01-library-vs-framework-and-react-ecosystem)
- [16 02 Library Vs Framework](#16-02-library-vs-framework)
- [16 03 Library Vs Framework](#16-03-library-vs-framework)
- [16 04 React Cosystem](#16-04-react-cosystem)
- [16 05 React Frameworks](#16-05-react-frameworks)

---

## 07 01 Component

![07 01 Component](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/07-01-component.png)

---

## 07 02 Component Instance

![07 02 Component Instance](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/07-02-component%20instance.png)

---

## 07 03 React Element

![07 03 React Element](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/07-03-react%20element.png)

---

## 07 04 Dom Element (Html)

![07 04 Dom Element (Html)](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/07-04-dom%20element%20%28html%29.png)

---

## 08 01 Component Instance

![08 01 Component Instance](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/08-01-component%20instance.png)

---

## 08 02 How Component Is Displayed

![08 02 How Component Is Displayed](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/08-02-how%20component%20is%20displayed.png)

---

## 08 03 How Render Triggered

![08 03 How Render Triggered](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/08-03-how%20render%20triggered.png)

---

## 09 01 Facts

![09 01 Facts](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/09-01-facts.png)

---

## 09 02 Render Phase Steps

![09 02 Render Phase Steps](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/09-02-render%20phase%20steps.png)

---

## 09 03 Update A Single Component

![09 03 Update A Single Component](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/09-03-update%20a%20single%20component.png)

---

## 09 04 Update The Root A

![09 04 Update The Root A](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/09-04-update%20the%20root%20A.png)

---

## 09 05 React Play Safe To Regenerate The Dom

![09 05 React Play Safe To Regenerate The Dom](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/09-05-react%20play%20safe%20to%20regenerate%20the%20DOM.png)

---

## 09 06 Reconciler (Fiber)

![09 06 Reconciler (Fiber)](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/09-06-Reconciler%20%28Fiber%29.png)

---

## 09 07 What Is Reconciliation And Why Do We Need It

![09 07 What Is Reconciliation And Why Do We Need It](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/09-07-what%20is%20RECONCILIATION%20and%20why%20do%20we%20need%20it.png)

---

## 09 08 Fiber Overview

![09 08 Fiber Overview](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/09-08-Fiber%20overview.png)

---

## 09 09 How Fiber Works

![09 09 How Fiber Works](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/09-09-how%20fiber%20works.png)

---

## 09 10 Render Phase After Fiber Done

![09 10 Render Phase After Fiber Done](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/09-10-render%20phase%20after%20fiber%20done.png)

---

## 10 01 The Commit Phase And Browser Paint

![10 01 The Commit Phase And Browser Paint](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/10-01-the%20commit%20phase%20and%20browser%20paint.png)

---

## 10 02 Renderers Concept

![10 02 Renderers Concept](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/10-02-Renderers%20concept.png)

---

## 10 03 Putting It All Together

![10 03 Putting It All Together](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/10-03-putting%20it%20all%20together.png)

---

## 11 01 Diffing

![11 01 Diffing](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/11-01-diffing.png)

---

## 11 02 Diffing For Same Position Diferent Element

![11 02 Diffing For Same Position Diferent Element](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/11-02-diffing%20for%20same%20position%20DIFERENT%20element.png)

---

## 11 03 Diffing For Same Position Same Element

![11 03 Diffing For Same Position Same Element](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/11-03-diffing%20for%20same%20position%20SAME%20element.png)

---

## 12 01 What Is The Key Prop

![12 01 What Is The Key Prop](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/12-01%20what%20is%20the%20key%20prop.png)

---

## 12 02 Why It Is Good To Use The Key Prop

![12 02 Why It Is Good To Use The Key Prop](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/12-02%20why%20it%20is%20good%20to%20use%20the%20key%20prop.png)

---

## 12 03 Key Prop Resets The State

![12 03 Key Prop Resets The State](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/12-03%20key%20prop%20resets%20the%20state.png)

---

## 13 01 Logic In React Components

![13 01 Logic In React Components](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/13-01-logic%20in%20react%20components.png)

---

## 13 02 Pure Vs Impure Functions

![13 02 Pure Vs Impure Functions](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/13-02-pure%20vs%20impure%20functions.png)

---

## 13 03 Rules For Render Logic

![13 03 Rules For Render Logic](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/13-03%20Rules%20for%20render%20logic.png)

---

## 14 01 Batched State Updates

![14 01 Batched State Updates](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/14-01-batched%20state%20updates.png)

---

## 14 02 The Problem Itself

![14 02 The Problem Itself](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/14-02-the%20problem%20itself.png)

---

## 14 03 How Batch Works

![14 03 How Batch Works](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/14-03-how%20batch%20works.png)

---

## 14 04 What Will Be The Value Of State

![14 04 What Will Be The Value Of State](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/14-04-what%20will%20be%20the%20value%20of%20state.png)

---

## 14 05 Versions Of React That Support Batching

![14 05 Versions Of React That Support Batching](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/14-05-versions%20of%20react%20that%20support%20batching.png)

---

## 15 01 Event Propagation And Delegation

![15 01 Event Propagation And Delegation](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/15-01-event%20propagation%20and%20delegation.png)

---

## 15 02 How React Handles Events

![15 02 How React Handles Events](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/15-02-how%20react%20handles%20events.png)

---

## 15 03 Synthetic Events

![15 03 Synthetic Events](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/15-03-Synthetic%20events.png)

---

## 16 01 Library Vs Framework And React Ecosystem

![16 01 Library Vs Framework And React Ecosystem](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/16-01%20library%20vs%20framework%20and%20react%20ecosystem.png)

---

## 16 02 Library Vs Framework

![16 02 Library Vs Framework](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/16-02%20library%20vs%20framework.png)

---

## 16 03 Library Vs Framework

![16 03 Library Vs Framework](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/16-03%20library%20vs%20framework.png)

---

## 16 04 React Cosystem

![16 04 React Cosystem](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/16-04%20react%20cosystem.png)

---

## 16 05 React Frameworks

![16 05 React Frameworks](https://raw.githubusercontent.com/eslamalawy/the-ultimate-react-course/main/Snapshots/11 How React Works Behind the Scenes/16-05%20react%20frameworks.png)

---

