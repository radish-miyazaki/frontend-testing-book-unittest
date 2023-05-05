import { getMyArticles } from "../fetchers";

export const getMyArticleLinksByCategory = async (category: string) => {
  const data = await getMyArticles();

  const articles = data.articles.filter((article) =>
    article.tags.includes(category)
  );
  if (!articles.length) {
    return null;
  }

  return articles.map((article) => ({
    title: article.title,
    link: `/articles/${article.id}`
  }))
}