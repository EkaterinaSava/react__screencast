import React, {PureComponent} from 'react';
import Article from '../Article';
import './style.css';

export default class ArticleList extends PureComponent {
  render() {
    const articleElements = this.props.articles.map(article =>
      <li key = {article.id} className="articles-list__item"><Article article = {article} /></li>
    )
  
    return (
      <ul className="articles-list">
        {articleElements}
      </ul>
    )
  }
}