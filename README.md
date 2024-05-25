# lookfeel

lookfeel is a design inspiration tool for developers that supports generating, visualising and discovering beautiful UI themes.

It was developed as part of the EdgeDB Hackathon.

Try it out at [lookfeel.io](https://lookfeel.io/).

## Stack

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

EdgeDB is a key part of **lookfeel**, enabling the sharing and discovery of user generated themes.

Themes consist of palette colours, heading and body fonts, and tags. Users can generate themes through the client and publish them to share with others.

Users can like themes they find useful and save them for future reference. Themes can also be filtered to show trending, saved and created themes.

### Themes

Themes are the main object type and include theme and like information, a URL-friendly short ID and creator information.

A theme palette includes 4 base colours which are converted into a range of shades.

To generate a theme, a random hue is selected and used to generate one of three color schemes: monochromatic, contrast and triade. An additional variant modifier is then applied to vary the theme.

For more detail on color scheme generation see [color-scheme-js](https://github.com/c0bra/color-scheme-js).

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
  likes: Likes;
  like_count: number;
  created_at: Date;
  udpated_at: Date;
};
```

### Likes

Likes join user and theme IDs with a unique constraint. When a user likes a theme, a new like entry is created and linked to the theme.

When a post is liked, the like count value is also increased. This method was preferred over the count computed property to avoid expensive computation across themes with many likes.

When fetching a theme, a `liked` property is also returned if made by a logged in user. This is used to indicate which themes the user has currently liked.

```tsx
type Likes = {
  user: User;
  theme: Theme;
};
```

### Theme filters

Themes can be queried as a single entity or as a list based on various filters.

Filters include `latest`, `trending` (most liked themes), `liked` (current user's liked themes) and `created` (current user's created themes).

These filtered lists are used to display themes customised to each user.
