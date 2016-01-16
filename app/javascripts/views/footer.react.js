import React from 'react'

export default class Footer extends React.Component {
  render () {
    return (
      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          <b>Version</b> {name}@{version}
        </div>
        <strong>Copyright &copy; 2014-2015 <a href="https://smrtsystems.com">SMRT Systems</a>.</strong> All rights reserved.
      </footer>
    );
  }
}