import { Article as ArticleType } from "../types";

export default function Article(props: ArticleType) {
    const { headline, paragraph, image, author, category, source } = props;
    return (
        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-1">
                <img className="sm:m-auto md:m-0 block" src={image} alt={headline} />
            </div>
            <div className="text-left md:col-span-4 relative">
                <h1 className="text-lg font-bold my-2">{headline}</h1>
                <p>{paragraph}</p>
                <div className="my-4">
                    {author && <p className="text-sm"><b>Author</b>: {author}</p>}
                {source && <p className="text-sm"><b>Source</b>: {source}</p>}
                {category && <p className="text-sm"><b>Category</b>: {category}</p>}
                </div>
            </div>
        </div>
    )
}