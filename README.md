# Personal Website
To visit, head over to: [https://sobekcore.com](https://sobekcore.com).

This website is a “Launchpad” for projects of mine, as well as an aggregation of all the necessary information about stuff that I do and which I would like to share with the world.

## Technologies
The site is built with Astro at its core, but is using some interesting techniques to enhance user experience:
- [Astro MDX Integration](https://github.com/withastro/astro/tree/main/packages/integrations/mdx) to write content in a more semantic way
- [Astro Vue Integration](https://github.com/withastro/astro/tree/main/packages/integrations/vue) to bring reactivity into the website using Vue components

## Delivery
To deliver the website as fast as possible, AWS S3 alongside AWS CloudFront is used. It is performing this fast thanks to AWS' globally-distributed network, which is optimized by client request specific region.
