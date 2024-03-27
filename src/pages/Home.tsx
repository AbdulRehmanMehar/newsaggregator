import FiltersForm from "../components/FiltersForm";
import List from "../components/List";
import PrefferenceForm from "../components/PreferenceForm";
import Toggle from "../components/Toggle";
import { useGetSourcesQuery } from "../store/api/newsapi";
import { NewsAPICategory } from "../types/NewsAPI";

const categories: NewsAPICategory[] = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];
const categoriesAsOption = categories.map((category) => ({
  label: category,
  value: category,
}));


export default function Home() {
const { data } = useGetSourcesQuery();
  return (
    <div className="max-w-screen-xl w-full m-auto">
     
        <div className="text-left">
          <Toggle label="Filters Form">
            <FiltersForm  sources={data?.sources || []} categories={categoriesAsOption}  />
          </Toggle>
          <br />
          <Toggle label="Prefference Form">
            <PrefferenceForm sources={data?.sources || []} categories={categoriesAsOption}  />
          </Toggle>
        </div>
      
      <List />
    </div>
  );
}
