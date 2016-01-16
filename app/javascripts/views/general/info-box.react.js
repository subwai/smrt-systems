import React from 'react'
import classnames from 'classnames'

export default class InfoBox extends React.Component {
  render = () => {
    return (
      <div className={classnames("info-box", this.props.background)}>
        {this.props.icon}

        <div className="info-box-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}