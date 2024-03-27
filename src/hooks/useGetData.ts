import { useGetHeadlinesQuery as useNewsAPIGetHeadlinesQuery } from "../store/api/newsapi";
import { useGetHeadlinesQuery as useTheGuardianGetHeadlinesQuery } from "../store/api/theguardian";
import { useGetHeadlinesQuery as useNewYorkTimesGetHeadlinesQuery } from "../store/api/newyorktimes";
import { Article } from "../types";
import {
  transformFiltersToNewsAPI,
  transformFiltersToNewyorkTimes,
  transformFiltersToTheGuardian,
  transformNewYorkTimesArticles,
  transformNewsAPIArticles,
  transformTheGuardianArticles,
} from "../utils/transform";
import { useAppSelector } from "../store";

export default function useGetData(): [Article[], boolean, boolean] {

  const filters = useAppSelector(store => store.appSlice.filters);
  const preferences = useAppSelector(store => store.appSlice.preferences);

  const newsApiFilters = transformFiltersToNewsAPI(filters || preferences);
  const theguardianFilters = transformFiltersToTheGuardian(filters || preferences);
  const newYorkTimesFilters = transformFiltersToNewyorkTimes(filters || preferences);

  const {
    data: newsApiData,
    isLoading: isNewsApiLoading,
    isFetching: isNewsApiFetching,
    isError: isNewsApiFailing,
  } = useNewsAPIGetHeadlinesQuery(newsApiFilters);
  const {
    data: theguardianData,
    isLoading: isTheGuardianLoading,
    isFetching: isTheGuardianFetching,
    isError: isTheGuardianFailing
  } = useTheGuardianGetHeadlinesQuery(theguardianFilters);
  const {
    data: newyorkTimesData,
    isLoading: isNewyorkTimesLoading,
    isFetching: isNewYorkTimesFetching,
    isError: isNewYorkTimesFailing
  } = useNewYorkTimesGetHeadlinesQuery(newYorkTimesFilters);

  const isLoading =
    isNewsApiLoading ||
    isNewsApiFetching ||
    isTheGuardianLoading ||
    isTheGuardianFetching ||
    isNewYorkTimesFetching ||
    isNewyorkTimesLoading;

  const isError = isNewYorkTimesFailing || isNewsApiFailing || isTheGuardianFailing

  const articles: Article[] = [
    ...transformNewsAPIArticles(newsApiData?.articles || []),
    ...transformTheGuardianArticles(theguardianData?.response?.results || []),
    ...transformNewYorkTimesArticles(newyorkTimesData?.response?.docs || []),
  ];

  return [articles, isLoading, isError];
}
