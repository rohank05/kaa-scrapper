import axios from "axios";
import qs from "qs";

// @ts-ignore
export async function search(query:string):Promise<Array<AnimeSearch>>{
    const data = qs.stringify({
        "keyword": query
    });

    const config = {
        headers: {
            'Host': 'www2.kickassanime.ro',
            'Origin': 'https://www2.kickassanime.ro',
            'Referer': 'https://www2.kickassanime.ro',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    };
    const animeData = await axios.post("https://www2.kickassanime.ro/api/anime_search", data, config);
    return animeData.data;
}


export interface AnimeSearch {
    name: string,
    slug: string,
    image: string
}
