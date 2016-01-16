import React from 'react'
import listensToClickOutside from 'react-onclickoutside/decorator'; 
import classnames from 'classnames'

class HeaderMessages extends React.Component {
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
        'messages-menu': true,
        'open': this.state.isOpened
      })} ref='area'>
        <div className="dropdown-toggle" data-toggle="dropdown" onClick={this.toggle}>
          <i className="fa fa-envelope-o"></i>
          <span className="label label-success">4</span>
        </div>
        <ul className="dropdown-menu">
          <li className="header">You have 4 messages</li>
          <li>
            {/* inner menu: contains the actual data */}
            <ul className="menu">
              <li>{/* start message */}
                <a href="#">
                  <div className="pull-left">
                    <img src="assets/images/user2-160x160.jpg" className="img-circle" alt="User Image" />
                  </div>
                  <h4>
                    Support Team
                    <small><i className="fa fa-clock-o"></i> 5 mins</small>
                  </h4>
                  <p>Why not buy a new awesome theme?</p>
                </a>
              </li>{/* end message */}
              <li>
                <a href="#">
                  <div className="pull-left">
                    <img src="assets/images/user3-128x128.jpg" className="img-circle" alt="User Image" />
                  </div>
                  <h4>
                    AdminLTE Design Team
                    <small><i className="fa fa-clock-o"></i> 2 hours</small>
                  </h4>
                  <p>Why not buy a new awesome theme?</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="pull-left">
                    <img src="assets/images/user4-128x128.jpg" className="img-circle" alt="User Image" />
                  </div>
                  <h4>
                    Developers
                    <small><i className="fa fa-clock-o"></i> Today</small>
                  </h4>
                  <p>Why not buy a new awesome theme?</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="pull-left">
                    <img src="assets/images/user3-128x128.jpg" className="img-circle" alt="User Image" />
                  </div>
                  <h4>
                    Sales Department
                    <small><i className="fa fa-clock-o"></i> Yesterday</small>
                  </h4>
                  <p>Why not buy a new awesome theme?</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="pull-left">
                    <img src="assets/images/user4-128x128.jpg" className="img-circle" alt="User Image" />
                  </div>
                  <h4>
                    Reviewers
                    <small><i className="fa fa-clock-o"></i> 2 days</small>
                  </h4>
                  <p>Why not buy a new awesome theme?</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="footer"><a href="#">See All Messages</a></li>
        </ul>
      </li>
    )
  }
}

export default listensToClickOutside(HeaderMessages);