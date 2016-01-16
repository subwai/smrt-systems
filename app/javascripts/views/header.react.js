
import React from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'

import HeaderSignup from './header/signup.react'
import HeaderMessages from './header/messages.react'
import HeaderNotifications from './header/notifications.react'
import HeaderTasks from './header/tasks.react'
import HeaderUser from './header/user.react'

export default class Header extends React.Component {
  state = {
    notificationsOpen: false,
    tasksOpen: false,
    userOpen: false
  }

  toggleNotifications = () => {
    this.setState({ notificationsOpen: !this.state.notificationsOpen })
  }

  toggleTasks = () => {
    this.setState({ tasksOpen: !this.state.tasksOpen })
  }

  toggleUser = () => {
    this.setState({ userOpen: !this.state.userOpen })
  }

  render = () => {
    return (
      <header className="main-header">
        <Link to='/' className="logo">
          <span className="logo-mini"><b>SFGC</b></span>
          <span className="logo-lg"><b>SF Green Clean</b></span>
        </Link>
        <nav className="navbar navbar-static-top" role="navigation">
          <div href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button" onClick={this.props.toggleSidebar}>
            <span className="sr-only">Toggle navigation</span>
          </div>
          <HeaderSignup />
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <HeaderMessages />
              <HeaderNotifications />
              <HeaderTasks />
              <HeaderUser />
              <li>
                <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}