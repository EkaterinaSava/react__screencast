import React from 'react';
import Article from './Article';

export default function ArticleList ({ articles }) {

  const articleElements = articles.map(article =>
      <li key = {article.id} className="articles__list-item"><Article article = {article} /></li>
    )
  return (
    <ul className="articles__list">
      {articleElements}
    </ul>
  )
}