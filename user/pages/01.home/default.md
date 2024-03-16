---
title: Home
body_classes: title-center title-h1h2

content:
    items:
        '@taxonomy.tag': blog
    order:
        by: dir
        dir: desc
    limit: 10
---

# Hello, I'm Julian

I'm a frontend and backend engineer, currently focused on ecommerce technologies


{{ dump(page.collection[page.path]) }}
