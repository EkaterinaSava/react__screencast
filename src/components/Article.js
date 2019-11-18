import React, {Component} from 'react';

class Article extends Component {

  state = {
    isOpen: true
  }

  render() {
    const {article} = this.props

    const body = this.state.isOpen && <section>{article.text}</section>

    return (
      <div className="card">
        <div className="card-header">
          <h2 className="card-header-title">{article.title}</h2>
          <div className="card-header-icon">
            <button className="button is-dark is-small" onClick={this.handleClick}>{this.state.isOpen ? 'close' : 'open'}</button>
          </div>
        </div>
        <div className="card-content">
          {body}
          <div className="card-footer">creation date: {(new Date (article.date)).toDateString()}</div>
        </div>
      </div>
    )
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default Article