import useGetData from "../hooks/useGetData";
import Article from "./Article";

export default function List() {
  const [articles, isLoading, isError] = useGetData();
 
  return !isLoading
    ? articles?.map((article) => (
        <div key={article.headline} className="py-5 border-b">
          <Article {...article} />
        </div>
      ))
    : isError
    ? "Error while loading articles"
    : "Loading...";
}
