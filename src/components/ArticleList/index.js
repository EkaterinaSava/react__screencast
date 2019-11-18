import React from 'react';
import Article from '../Article';
import './style.css';

export default function ArticleList ({ articles }) {

  const articleElements = articles.map(article =>
    <li key = {article.id} className="articles-list__item"><Article article = {article} /></li>
  )

  return (
    <ul className="articles-list">
      {articleElements}
    </ul>
  )

}