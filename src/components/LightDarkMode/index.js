import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  onClickButton = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const modeText = isDark ? 'Light Mode' : 'Dark Mode'
    const modeClassName = isDark ? 'black-bg' : 'white-bg'
    return (
      <div className="bg-main-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="title">Click To Change Mode</h1>
          <button
            className="btn-sty"
            type="button"
            onClick={this.onClickButton}
          >
            {modeText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
