import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NewsAPIArticle, NewsAPIQueryParams, NewsAPIResponseBody, NewsAPISoruce } from '../../types/NewsAPI';
import { stringify } from 'qs'



const adjustQueryParams = (args: unknown) => stringify({...(args || {}), language: 'en'})

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://newsapi.org/v2`,
    headers: {
      'X-Api-Key': import.meta.env.VITE_NEWSAPI_APIKEY
    }
  }),

  endpoints: (builder) => ({
    getHeadlines: builder.query<NewsAPIResponseBody<{ articles: NewsAPIArticle[] }>, NewsAPIQueryParams | void
    >({
      query: (args) => ({
        url: `/top-headlines?${adjustQueryParams(args)}`,
      }),
      // transformResponse(baseQueryReturnValue:NewsAPIResponseBody<{ articles: NewsAPIArticle[] }>, meta, arg) {
      //   return baseQueryReturnValue.articles
      // },
    }),
    getSources: builder.query<NewsAPIResponseBody<{sources: NewsAPISoruce[]}>, Pick<NewsAPIQueryParams, 'category'> | void
    >({
      query: (args) => ({
        url: `/top-headlines/sources?${adjustQueryParams(args)}`,
      }),

      // transformResponse(baseQueryReturnValue: NewsAPIResponseBody<{sources: NewsAPISoruce[]}>, meta, arg) {
      //   return baseQueryReturnValue.sources
      // },
    }),
  }),
});

export const { useGetHeadlinesQuery, useGetSourcesQuery } = newsApi;