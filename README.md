<div align="center">
    <h1>kaa-scrapper</h1>
    <p>
    <a href="https://discord.com/invite/a4zkCjg"><img src="https://img.shields.io/discord/735899211677041099?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/kaa-scrapper"><img src="https://img.shields.io/npm/v/kaa-scrapper.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/kaa-scrapper"><img src="https://img.shields.io/npm/dt/kaa-scrapper.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://www.patreon.com/rohank05"><img src="https://img.shields.io/badge/donate-patreon-F96854.svg" alt="Patreon" /></a>
    </p>
</div>

## About

KAA Scrapper is a TypeScript library for scraping search results from [KickAssAnime](https://www1.kickassanime.mx/). It provides a simple interface to search for anime and retrieve details about them.

## Installation

```sh-session
npm install kaa-scrapper
```

## Example usage

Here is a simple example of how to use the `search` function in a TypeScript project:

```typescript
import { search, SearchResponse } from 'kaa-scrapper';

async function findAnime(query: string, page: number = 1) {
  try {
    const searchResult: SearchResponse = await search(query, page);
    console.log(searchResult);
  } catch (error) {
    console.error('An error occurred during search:', error);
  }
}

findAnime('Kakushigoto', 1);
```

The `searchResult` object will look like this:

```json
{
  "maxPage": 1,
  "result": [
    {
      "episode_count": 12,
      "episode_duration": 24,
      "genres": ["Comedy", "Slice of Life"],
      "locales": ["dub", "sub"],
      "poster": {
        "blur_hash": "UPE_g_004n~qofM{IVD%t7ofIUIUxuM{ofWB",
        "name": "poster-611296f5b9d36.jpg",
        "url": "https://s4.bunnycdn.ru/assets/sites/kickassanime/poster/611296f5b9d36.jpg"
      },
      "slug": "kakushigoto-tv",
      "status": "completed",
      "synopsis": "The story of Kakushi Gotou, an artist who draws a somewhat vulgar manga, and tries to hide it for the sake of his daughter, Hime.",
      "title": "Kakushigoto (TV)",
      "type": "anime",
      "year": 2020
    }
  ]
}
```

## API Reference

### `search(query: string, page: number = 1): Promise<SearchResponse>`

Searches for anime on KickAssAnime.

-   `query` (string): The search term.
-   `page` (number, optional): The page number to retrieve. Defaults to `1`.

Returns a `Promise` that resolves to a `SearchResponse` object.

### `SearchResponse`

An object containing the search results.

-   `maxPage` (number): The total number of pages available for the search query.
-   `result` (SearchResult[]): An array of `SearchResult` objects.

### `SearchResult`

An object containing details about a single anime.

-   `episode_count` (number): The total number of episodes.
-   `episode_duration` (number): The duration of each episode in minutes.
-   `genres` (string[]): An array of genres associated with the anime.
-   `locales` (string[]): An array of available audio locales (e.g., "dub", "sub").
-   `poster` (object): An object containing poster image details.
    -   `blur_hash` (string): A blurhash string for the poster image.
    -   `name` (string): The filename of the poster image.
    -   `url` (string): The URL of the poster image.
-   `slug` (string): The URL-friendly slug for the anime title.
-   `status` (string): The status of the anime (e.g., "completed", "airing").
-   `synopsis` (string): A brief summary of the anime's plot.
-   `title` (string): The title of the anime.
-   `type` (string): The type of media (e.g., "anime").
-   `watch_uri` (string, optional): The URI to watch the anime.
-   `year` (number): The release year of the anime.

## Development

To get started with developing `kaa-scrapper`:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/rohank05/kaa-scrapper.git
    cd kaa-scrapper
    ```

2.  **Install dependencies:**
    ```sh
    yarn install
    ```

3.  **Build the project:**
    ```sh
    yarn build
    ```
    This will compile the TypeScript source code into JavaScript in the `dist` directory.

## Links

-   [Discord server](https://discord.com/invite/a4zkCjg)
-   [GitHub](https://github.com/rohank05/kaa-scrapper)
-   [NPM](https://www.npmjs.com/package/kaa-scrapper)

## Help

If you don't understand something in the documentation, are experiencing problems, or just need a gentle nudge in the right direction, kindly create a [GitHub issue](https://github.com/rohank05/kaa-scrapper/issues) or join our official [kaa-scrapper Support Server](https://discord.com/invite/a4zkCjg).
