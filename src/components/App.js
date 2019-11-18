import React from 'react';
import ArticleList from './ArticleList';
import articles from '../fixtures';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="articles">
      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Article List</h1>
            <h2 className="subtitle">Awesome list of articles</h2>
          </div>
        </div>
      </section>
      <div className="container">
        <ArticleList articles = {articles} />
      </div>
    </div>
  )
}

export default App;
