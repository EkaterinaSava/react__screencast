import React, {PureComponent} from 'react';
import './common.css';

class Article extends PureComponent {

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.isOpen !== nextState.isOpen
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState ({
  //     isOpen: nextProps.defaultOpen
  //   })
  // }

  render() {
    const {article, isOpen, onButtonClick} = this.props

    const body = isOpen && <section className="card-content">{article.text}</section>

    return (
      <div className="card">
        <div className="card-header">
          <h2 className="card-header-title">{article.title}</h2>
          <div className="card-header-icon">
            <button className="button is-dark is-small" onClick={onButtonClick}>
              {isOpen ? 'close' : 'open'}
            </button>
          </div>
        </div>
        <div className="card-content__outer">
          {body}
        </div>
        <div className="card-footer">
          <div className="card-footer__inner">Date: {(new Date (article.date)).toDateString()}</div>
        </div>
      </div>
    )
  }
}

export default Article