# lookfeel

lookfeel is a design inspiration tool for developers that supports generating, visualising and discovering beautiful UI themes.

It was developed as part of the EdgeDB Hackathon.

Try it out at [lookfeel.io](https://lookfeel.io/).

## 👩‍💻 Stack

This project was built with the T3 Stack, including Next.js (app router), Tailwind CSS and TRPC, with UI components from shadcn/ui.

EdgeDB was the database of choice.

- [T3 Stack](https://create.t3.gg/)
- [EdgeDB](https://www.edgedb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Getting started

### 1) Initialise project

Clone the project and install dependencies.

```
pnpm i
```

### 2) Setup EdgeDB

Initialise the EdgeDB project and generate the EdgeDB query builder types.

```
edgedb project init

pnpm generate:edgeql
```

### 3) Start development server

```
pnpm dev
```

### 4) Setup auth

This project uses EdgeDB's built-in UI for auth. Follow [these instructions](https://docs.edgedb.com/guides/auth/built_in_ui) to set up your auth providers of choice.
