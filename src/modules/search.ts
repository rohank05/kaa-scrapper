import request from "./utils";

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
const searchPath = "/fsearch";
const search = async (query: string, page: number = 1) => {
    return await request<SearchResponse>(searchPath, "POST", {
        query,
        page,
    });
};
export { SearchResponse, SearchResult, search };
