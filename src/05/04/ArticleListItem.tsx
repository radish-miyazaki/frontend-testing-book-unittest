export type ItemProps = {
  id: string;
  title: string;
  body: string;
}

export const ArticleListItem = ({ id, title, body } : ItemProps) => (
  <li>
    <h3>{title}</h3>
    <p>{body}</p>
    <a href={`/articles/${id}`}>もっと見る</a>
  </li>
)