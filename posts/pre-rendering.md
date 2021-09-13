---
title: 'Pre-rendering'
date: '2021-09-13'
---

One of the **most important concepts** in Next.js is **pre-rendering**.

By default, Next.js **pre-renders every page**. This means that Next.js **generates HTML for each page in advance**, instead of having it all done by client-side JavaScript. Pre-rendering can result in **better performance and SEO**.

Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive (this process is called **hydration**).
