import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { stringify } from 'qs'
import { TheGuardianQueryParams, TheGuardianResponseBody } from '../../types/TheGuardian';



export const theGuardianApi = createApi({
  reducerPath: 'theGuardianApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://content.guardianapis.com',
  }),

  endpoints: (builder) => ({
    getHeadlines: builder.query<TheGuardianResponseBody, TheGuardianQueryParams | void
    >({
      query: (args) => ({
        url: `/search?${stringify({...(args || {}), 'api-key': import.meta.env.VITE_GUARDIAN_APIKEY, 'show-fields': 'thumbnail,trailText' })}`,
      }),
    }),
  }),
});

export const { useGetHeadlinesQuery } = theGuardianApi;