import { NewsAPICategory } from "./NewsAPI";


export type Article = {
    headline: string;
    author?: string;
    category?: string;
    source?: string;
    paragraph?: string;
    image?: string;
}

export type Filters = Partial<{
    keywords: string;
    source: string;
    category: NewsAPICategory;
    date:  string;
}>

export type Preferences = Pick<Filters, 'category' | 'source'>;