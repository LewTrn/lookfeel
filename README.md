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

## Using EdgeDB

The schema for this project is defined in [dbschema/default.esdl](dbschema/default.esdl).

### Themes

Themes are the main object type and include theme information including palette, fonts and tags.

**Short ID** - short, URL friendly, unique identifier.

**Palette, fonts, tags** - theme information used to construct the UI theme.

**Likes** - links to the likes table joining users and themes.

**Like count** - number of unique likes by users on the theme.

```tsx
type Theme = {
  short_id: string;
  palette: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  tags: {
    name: string;
  };
  likes: Array<{ id: string }>;
  like_count: number;
  created_at: Date;
  udpated_at: Date;
};
```

### Likes

Likes join users and and themes and are linked to a theme when a like is inserted.

Like count on the theme is also updated when a post is liked. This was preferred over computing properties using likes to avoid expensive computation when fetching many themes with lots of likes.

```tsx
type Likes = {
  user: User;
  theme: Theme;
};
```

### API design

The theme APIs are defined via the TRPC router: [theme.ts](src/server/api/routers/theme.ts).

Themes containing theme information are queried either by filtering on a single ID, or as a list based on the filter parameter.

Filters include `latest`, `trending` (most liked themes), `liked` (current user's liked themes) and `created` (current user's created themes).
