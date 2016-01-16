import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import classnames from 'classnames'
import mq from 'browsernizr/test/css/mediaqueries'
import Modernizr from 'browsernizr'

import Header from './header.react'
import LeftSidebar from './left-sidebar.react'
import Footer from './footer.react'
import RightSidebar from './right-sidebar.react'

export default class App extends React.Component {
  state = {
    sidebarCollapse: 0
  }

  toggleSidebar = () => {
    var sidebarCollapse = 0;

    const extraSmall = Modernizr.mq('(max-width: 767px)');

    switch (this.state.sidebarCollapse) {
      case -1:
        if (extraSmall) {
          sidebarCollapse = 1
        }
        else {
          sidebarCollapse = 0
        }
        break;
      case 0:
        if (extraSmall) {
          sidebarCollapse = 1
        }
        else {
          sidebarCollapse = -1
        }
        break;
      case 1:
        if (extraSmall) {
          sidebarCollapse = 0
        }
        else {
          sidebarCollapse = -1
        }
    }
    this.setState({ sidebarCollapse: sidebarCollapse })
  }

  render = () => {
    return (
      <div id="app" className={classnames({
        'hold-transition': true,
        'sidebar-mini': true,
        'skin-green-light': true,
        'fixed': true,
        'sidebar-collapse': this.state.sidebarCollapse == -1,
        'sidebar-open': this.state.sidebarCollapse == 1
      })} ref='app'>
        <div className="wrapper">
          <Header toggleSidebar={this.toggleSidebar} />
          <LeftSidebar />
          <div className="content-wrapper">
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}