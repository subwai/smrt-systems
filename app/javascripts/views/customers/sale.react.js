import React from 'react'
import classnames from 'classnames'

import InfoBox from '../general/info-box.react'

export default class SaleBox extends React.Component {
  state = {
    isOpen: false
  }

  open = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  render = () => {
    let { sale } = this.props
    let { isOpen } = this.state

    let icon = (
      <span className="info-box-icon bg-aqua"><i className="fa fa-flag-o"></i></span>
    )

    return (
      <div className={classnames({
        'box': true,
        'box-sale': true,
        'box-success': true,
        'collapsed-box': !isOpen
      })}>
        <div className="box-header with-border" onClick={this.open}>
          <InfoBox icon={icon} background=''>
            <span className="info-box-text">Garments</span>
            <span className="info-box-number">2</span>

            <span className="progress-description">
              #{sale.id}
            </span>
          </InfoBox>

          <div className="box-tools pull-right">
            <button type="button" className="btn btn-box-tool" data-widget="collapse">
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
        <div className="box-body" style={{display: isOpen ? 'block' : 'none'}}>
          {sale.status}
        </div>
      </div>
    )
  }
}