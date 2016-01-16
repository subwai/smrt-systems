import React from 'react'
import { Link } from 'react-router'
import Loader from 'react-loader'

import SaleBox from './sale.react'
import InfoBox from '../general/info-box.react'

import Customer from '../../models/Customer'

export CustomerList from './list.react'

export class CustomerIndex extends React.Component {
  state = {
    customer: undefined
  }

  componentWillMount = () => {
    let { custid } = this.props.params;

    Customer.get(custid)
        .then(customer => {
          this.setState({customer: customer})
        })
  }

  render = () => {
    const { customer } = this.state

    return (
      <Loader loaded={!!customer}>
        <CustomerHeader customer={customer} />
        <CustomerContent customer={customer} />
      </Loader>
    )
  }
}

class CustomerHeader extends React.Component {
  render = () => {
    const { customer } = this.props

    return (
      <section className="content-header">
        <h1>Customer Panel</h1>
        <ol className="breadcrumb">
          <li><Link to={'/'}><i className="fa fa-dashboard"></i> Home</Link></li>
          <li><Link to={'/customers'}>Customers</Link></li>
          <li className="active">{customer.name}</li>
        </ol>
      </section>
    )
  }
}

class CustomerContent extends React.Component {
  state = {
    sales: [],
    loaded: false
  }

  componentWillMount = () => {
    this.props.customer.sales()
      .then(sales => {
        this.setState({ sales: sales, loaded: true })
      })
  }

  render = () => {
    const { customer } = this.props
    const { loaded, sales } = this.state

    let saleBoxes = sales.map(sale => {
      return (
        <div key={sale.id} className="row">
          <div className="col-md-12">
            <SaleBox sale={sale} />
          </div>
        </div>
      )
    })

    let payIcon = (
      <span className="info-box-icon"><i className="fa fa-shopping-cart"></i></span>
    )

    return (
      <section className="content">
        <div className="row">
          <div className="col-md-12">
            <div className="box box-widget widget-user">
              <div className="widget-user-header bg-aqua-active">
                <div className="row">
                  <div className="col-xs-6">
                    <h3 className="widget-user-username">{customer.name}</h3>
                    <h5 className="widget-user-desc">Regular</h5>
                  </div>
                  <div className="col-md-3 col-md-push-3 col-sm-4 col-sm-push-2 col-xs-6">
                    <InfoBox icon={payIcon} background='bg-green'>
                      <span className="info-box-text">Pay</span>
                      <span className="info-box-number">$23.99</span>

                      <span className="progress-description">
                        1 Orders
                      </span>
                    </InfoBox>
                  </div>
                </div>
              </div>
              <div className="box-footer">
                <div className="row">
                  <div className="col-sm-4 border-right">
                    <div className="description-block">
                      <h5 className="description-header">3,200</h5>
                      <span className="description-text">SALES</span>
                    </div>
                  </div>
                  <div className="col-sm-4 border-right">
                    <div className="description-block">
                      <h5 className="description-header">13,000</h5>
                      <span className="description-text">FOLLOWERS</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="description-block">
                      <h5 className="description-header">35</h5>
                      <span className="description-text">PRODUCTS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Loader loaded={loaded}>
          {saleBoxes}
        </Loader>
      </section>
    )
  }
}