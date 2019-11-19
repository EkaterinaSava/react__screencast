import React, {Component} from 'react';
import ArticleList from './ArticleList';
import articles from '../fixtures';
import 'bulma/css/bulma.css';

class App extends Component {

  state = {
    reverted: false
  }

  render() {
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
          <nav className="navbar">
            <div className="navbar-end">
              <button className="button is-link is-outlined" onClick = {this.revert}> Revert</button>
            </div>
          </nav>
        </div>
  
        <div className="container">
          <ArticleList articles = {this.state.reverted ? articles.reverse() : articles} />
        </div>
      </div>
    )
  }

  revert = () => this.setState({
    reverted: !this.state.reverted
  })
}

export default App;
