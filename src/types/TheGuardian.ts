import { NewsAPICategory } from "./NewsAPI";

export type TheGuardianQueryParams = Partial<{
    q:  string;
    section: NewsAPICategory | NewsAPICategory[];
    'from-date': string;
}>;

export type TheGuardianArticleFileds = {
    thumbnail: string;
    trailText: string;
}

export type TheGuardianArticle = {
    id: string;
    type: string;
    sectionId: string;
    sectionName: string;
    webPublicationDate: string;
    webTitle: string;
    webUrl: string;
    apiUrl: string;
    isHosted: boolean;
    pillarId: string;
    pillarName: string;
    fields: TheGuardianArticleFileds
}

export type TheGuardianResponse = {
    status: string;
    userTier: string;
    total: number;
    startIndex: number;
    pageSize: number;
    currentPage: number;
    pages: number;
    orderBy: number;
    results: TheGuardianArticle[];
}

export type TheGuardianResponseBody = {
    response: TheGuardianResponse;
}