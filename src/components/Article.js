import React, {PureComponent} from 'react';
import './common.css';

class Article extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: props.defaultOpen
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.isOpen !== nextState.isOpen
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState ({
      isOpen: nextProps.defaultOpen
    })
  }

  render() {
    const {article} = this.props

    const body = this.state.isOpen && <section className="card-content">{article.text}</section>

    return (
      <div className="card">
        <div className="card-header">
          <h2 className="card-header-title">{article.title}</h2>
          <div className="card-header-icon">
            <button className="button is-dark is-small" onClick={this.handleClick}>{this.state.isOpen ? 'close' : 'open'}</button>
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

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default Article