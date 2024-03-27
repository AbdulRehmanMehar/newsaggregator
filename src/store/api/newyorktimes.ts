import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { stringify } from 'qs'
import { NewYorkTimesQueryParams, NewYorkTimesResponseBody } from '../../types/NewYorkTimes';

export const newYorkTimesApi = createApi({
  reducerPath: 'newYorkTimesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.nytimes.com/svc/search/v2',
  }),

  endpoints: (builder) => ({
    getHeadlines: builder.query<NewYorkTimesResponseBody, NewYorkTimesQueryParams | void
    >({
      query: (args) => ({
        url: `/articlesearch.json?${stringify({...(args || {}), 'api-key': import.meta.env.VITE_NYTIMES_APIKEY})}`,
      }),
    }),
  }),
});

export const { useGetHeadlinesQuery } = newYorkTimesApi;