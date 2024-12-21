
# Shoppin.app Interview Assignment - Frontend End Developer

  

This repo is my assignment submission for the role @ Shoppin.app. I've developed a Google web clone using NextJS 15, Zustand, TailwindCSS, Typescript, React Query. A fully functional Google Web clone application built with Next.js 15, Zustand for state management, React Query for fetching data, framer motion for animations and Tailwind CSS. The application allows users search text (currently is using static data, can we replaced with an API Call) and search similar images like Google Lens using a Free API.

**Looks better on Desktop but is fully responsive**
<br>
[Deployed Link]([https://next-todo-sktomsi.vercel.app/](https://google-image-search-peach.vercel.app/)

## Potential Improvements

- Robust State Management:
	- Considering the addition of the immer package to achieve O(1) time complexity through mutable state while updating and tackle deep nesting.

- Authentication:
	- Implementing a secure authentication system to ensure user data privacy and security.
	- Considering the addition of the next-auth package to manage user authentication and authorization.

  

- Backend Integration:
	- Integrating the backend API to persist the data in a DB so that the data can be made available anywhere and anytime.


## Packages & Libraries Used

In this project, the following packages and libraries were used to streamline development and offer a robust solution:

  

-  `Next.js`: Utilized to deliver a seamless user experience.

-  `Zustand`: Utilized for global state management to handle the app's global state efficiently.

-  `React Query`: Implemented to enhance the queries and API Call lifecycle to render UI accordingly.

-  `Shadcn UI`: Utilized for a modern and sleek UI components.

-  `Framer-motion`: Utilized for layout animations.

-  `Zod`: Integrated for validations to ensure data integrity and correctness.

  

## Features

  

- Pixel-perfect UI

- Search similar images using the google lens api


## Folder Structure
```bash
├── README.md
├── biome.jsonc
├── bun.lockb
├── components.json
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── google-color-logo.png
│   ├── google-lens.svg
│   ├── google-search.svg
│   ├── google-voice.png
│   ├── google.png
│   ├── next.svg
│   ├── test.png
│   ├── vercel.svg
│   └── window.svg
├── src
│   ├── app
│   │   ├── (search)
│   │   ├── actions
│   │   ├── api
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── home
│   │   ├── providers
│   │   ├── search
│   │   └── ui
│   ├── hooks
│   │   ├── use-debounce.ts
│   │   ├── use-image-search.ts
│   │   └── use-search-service.ts
│   ├── lib
│   │   ├── auth.ts
│   │   ├── keywords.ts
│   │   ├── mock-results.ts
│   │   ├── uploadthing.ts
│   │   └── utils.ts
│   ├── middleware.ts
│   └── store
│       └── use-seach-box.ts
├── tailwind.config.ts
└── tsconfig.json
```

