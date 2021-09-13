---
title: 'Client-side Rendering'
date: '2020-01-02'
---

If you don't need to pre-render data, you can also use the following strategy (called Client-side Rendering):

- Statically generate (pre-render) parts of the page that do not require external data.
- When the page loads, fetch external data from the client using JavaScript and populate the remaining parts.

This approach works well for user dashboard pages, for example. Because a dashboard is:

- private
- a user-specific page
- SEO is not relevant
- page doesn’t need to be pre-rendered

The data is frequently updated though, which requires request-time data fetching.
