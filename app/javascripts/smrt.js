import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import PouchDB from 'pouchdb'

import App from './views/app.react'
import {CustomerList, CustomerIndex} from './views/customers/index.react'





window.PouchDB = PouchDB;
window.db = new PouchDB('smrt-systems');
window.bid = 1;



let customer = {
  _id: '_design/customer',
  views: {
    'current_sales': {
      map: function (doc) {
        emit([doc.bid, doc.custid], doc.status);
      }.toString()
    }
  }
}
db.get('_design/customer')
    .then(doc => {
      if (doc.views != customer.views) {
        customer._rev = doc._rev;
        db.put(customer)
      }
    })
    .catch(err => {
      if (err.status == 404) {
        db.put(customer);
      }
    })


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="customers" component={CustomerList} />
      <Route path="customers/:custid" component={CustomerIndex} />
    </Route>
  </Router>
), document.getElementById('react'))