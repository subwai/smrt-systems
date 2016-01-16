import React from 'react'
import { Link } from 'react-router'
import Loader from 'react-loader'

import Customer from '../../models/Customer'

export default class CustomerList extends React.Component {
  state = {
    customers: [],
    loaded: false
  }

  componentWillMount = () => {
    Customer.all().then(customers => {
      this.setState({customers: customers, loaded: true});
    });
  }

  render () {
    var customers = this.state.customers.map(customer => {
      return (
        <li key={customer.id}>
          <Link to={"/customers/" + customer.id}>
            {customer.name}
          </Link>
        </li>
      );
    });

    return (
      <Loader loaded={this.state.loaded}>
        <section className="content-header">
          <h1>
            Customers
            <small>Dashboard</small>
          </h1>
          <ol className="breadcrumb">
            <li><Link to={'/'}><i className="fa fa-dashboard"></i> Home</Link></li>
            <li className="active">Customers</li>
          </ol>
        </section>

        <section className="content">
          <ul>
            {customers}
          </ul>
        </section>
      </Loader>
    );
  }
}