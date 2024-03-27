import { Article, Filters } from "../types";
import { NewYorkTimesArticle, NewYorkTimesQueryParams } from "../types/NewYorkTimes";
import { NewsAPIArticle, NewsAPIQueryParams } from "../types/NewsAPI";
import { TheGuardianArticle, TheGuardianQueryParams } from "../types/TheGuardian";
import { removeHTMLFromString } from "./sanitize";

export const transformNewsAPIArticles = (articles: NewsAPIArticle[]):  Article[] => {
    return articles.map(article => ({ headline: article.title, author: article.author, image: article.urlToImage, paragraph: article.description, source: article.source.name }))
}

export const transformTheGuardianArticles = (articles: TheGuardianArticle[]) : Article[] => {
    return articles.map(article => ({ headline: article.webTitle, image: article.fields.thumbnail, paragraph: removeHTMLFromString( article.fields.trailText )}))
}

export const transformNewYorkTimesArticles = (articles: NewYorkTimesArticle[]): Article[] => {
    return articles.map(article => ({ headline: article.headline.main, image: 'https://www.nytimes.com/' + article.multimedia[0]?.url, paragraph: article.lead_paragraph, source: article.source,  }))
}

export const transformFiltersToNewyorkTimes = (filters: Filters | undefined) => {
    if (!filters || !Object.keys(filters || {}).length) return undefined;

    const buildFilterQuery = (fq: string, q: string) => {
        return (fq.length ? ` ${fq} AND ${q}` : q);
    }

    let fq = '';

    if (filters.keywords) fq = buildFilterQuery(fq, `"${filters.keywords}"`);
    if (filters.category) fq = buildFilterQuery(fq, `news_desk:("${filters.category}")`);
    if (filters.source) fq = buildFilterQuery(fq, `source:"${filters.source}"`);
    if (filters.date) fq = buildFilterQuery(fq, `pub_date:"${filters.date}"`)

    fq = fq.trim()

    if (!fq.length) return undefined;

    return { fq } as NewYorkTimesQueryParams
}

export const transformFiltersToNewsAPI =  (filters: Filters | undefined) => {
    if (!filters || !Object.keys(filters || {}).length) return undefined;

    let returnable: NewsAPIQueryParams = {};

    if (filters.keywords) returnable.q = filters.keywords;
    if (filters.source) returnable.sources = filters.source;
    if (filters.category) returnable.category = filters.category;

    return returnable;
}

export const transformFiltersToTheGuardian = (filters: Filters | undefined) => {
    if (!filters || !Object.keys(filters || {}).length) return undefined;

    let returnable: TheGuardianQueryParams = {};

    if (filters.keywords) returnable.q = filters.keywords;
    if (filters.category) returnable.section = filters.category;
    if (filters.date) returnable['from-date'] = filters.date;

    return returnable;
}