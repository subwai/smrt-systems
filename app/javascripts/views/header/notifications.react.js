import React from 'react'
import listensToClickOutside from 'react-onclickoutside/decorator'; 
import classnames from 'classnames'

class HeaderNotifications extends React.Component {
  state = {
    isOpened: false
  }

  componentWillUpdate = (nextProps, nextState) => {
    if (nextState.isOpened) {
      this.props.enableOnClickOutside()
    }
    else {
      this.props.disableOnClickOutside()
    }
  }

  handleClickOutside = (event) => {
    this.setState({ isOpened: false });
  }

  toggle = () => {
    this.setState({ isOpened: !this.state.isOpened })
  }

  render = () => {
    return (
      <li className={classnames({
        'dropdown': true,
        'notifications-menu': true,
        'open': this.state.isOpened
      })} ref='area'>
        <div className="dropdown-toggle" data-toggle="dropdown" onClick={this.toggle}>
          <i className="fa fa-bell-o"></i>
          <span className="label label-warning">10</span>
        </div>
        <ul className="dropdown-menu">
          <li className="header">You have 10 notifications</li>
          <li>
            {/* inner menu: contains the actual data */}
            <ul className="menu">
              <li>
                <a href="#">
                  <i className="fa fa-users text-aqua"></i> 5 new members joined today
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-warning text-yellow"></i> Very long description here that may not fit into the page and may cause design problems
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-users text-red"></i> 5 new members joined
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-shopping-cart text-green"></i> 25 sales made
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-user text-red"></i> You changed your username
                </a>
              </li>
            </ul>
          </li>
          <li className="footer"><a href="#">View all</a></li>
        </ul>
      </li>
    )
  }
}

export default listensToClickOutside(HeaderNotifications);