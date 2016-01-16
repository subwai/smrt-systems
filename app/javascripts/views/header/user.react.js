import React from 'react'
import listensToClickOutside from 'react-onclickoutside/decorator'; 
import classnames from 'classnames'

class HeaderUser extends React.Component {
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
        'user-menu': true,
        'open': this.state.isOpened
      })} ref='area'>
        <div href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={this.toggle}>
          <img src="assets/images/user2-160x160.jpg" className="user-image" alt="User Image" />
          <span className="hidden-xs">Alexander Pierce</span>
        </div>
        <ul className="dropdown-menu">
          {/* User image */}
          <li className="user-header">
            <img src="assets/images/user2-160x160.jpg" className="img-circle" alt="User Image" />
            <p>
              Alexander Pierce - Web Developer
              <small>Member since Nov. 2012</small>
            </p>
          </li>
          {/* Menu Body */}
          <li className="user-body">
            <div className="col-xs-4 text-center">
              <a href="#">Followers</a>
            </div>
            <div className="col-xs-4 text-center">
              <a href="#">Sales</a>
            </div>
            <div className="col-xs-4 text-center">
              <a href="#">Friends</a>
            </div>
          </li>
          {/* Menu Footer*/}
          <li className="user-footer">
            <div className="pull-left">
              <a href="#" className="btn btn-default btn-flat">Profile</a>
            </div>
            <div className="pull-right">
              <a href="#" className="btn btn-default btn-flat">Sign out</a>
            </div>
          </li>
        </ul>
      </li>
    )
  }
}

export default listensToClickOutside(HeaderUser);