import axios from "axios";

// @ts-ignore
export async function search(query:string):Promise<AnimeSearch>{
    const res = await axios.get(`https://www2.kickassanime.ro/search?q=${query}`);
    const searchHTML = res.data;
    const DividedHTML = searchHTML.split('\n');
    let pageData:string;
    DividedHTML.forEach((line:string)=>{
        // @ts-ignore
        if(line.includes('appUrl')){
            pageData = line;
        }
    });

    const segregateData = pageData!.slice(156,-16);
    const Data = JSON.parse(segregateData);
    const anime:AnimeSearch = Data.animes;
    return anime;
}


export interface AnimeSearch {
    name: string,
    slug: string,
    slug_id: string,
    poster: string,
    image: string
}
