type SearchResponse = {
    maxPage: number;
    result: SearchResult[];
};
type SearchResult = {
    episode_count: number;
    episode_duration: number;
    genres: string[];
    locales: string[];
    poster: object;
    slug: string;
    status: string;
    synopsis: string;
    title: string;
    type: string;
    watch_uri?: string;
    year: number;
};
declare const search: (query: string, page?: number) => Promise<unknown>;
export { SearchResponse, SearchResult, search };
