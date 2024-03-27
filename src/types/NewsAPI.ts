export type NewsAPIQueryParams = Partial<{
    q: string;
    sources: NewsAPISoruce['name'] | NewsAPISoruce['name'][];
    from: string;
    to: string;
    category: NewsAPICategory | NewsAPICategory[];
}>;


export type NewsAPIResponseBody<T> = {
    status: string;
    totalResults?: number;
} & T;

export type NewsAPISoruce =  {
    id: string,
    name: string
};

export type NewsAPIArticle = {
    source: NewsAPISoruce;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
};

export type NewsAPICategory = 'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology';