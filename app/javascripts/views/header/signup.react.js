import React from 'react'
import { Modal, Row, Col, Button, Input, ButtonInput } from 'react-bootstrap'

import Customer from '../../models/Customer'

export default class HeaderSignup extends React.Component {
  static defaultState = {
    showModal: false,
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    aptSuite: '',
    state: 'CA',
    city: '',
    phone: ''
  }

  state = HeaderSignup.defaultState

  close = () => {
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }

  submit = () => {
    Customer.nextId()
        .then(custid => {
          let customer = new Customer({
            _id: 'Customer_' + bid + '_' + custid,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            address: this.state.address,
            aptSuite: this.state.aptSuite,
            state: this.state.state,
            city: this.state.city,
            phone: this.state.phone
          })

          customer.put()
              .then(result => {
                  this.close()
                  this.setState(HeaderSignup.defaultState)
              })
        })
        .catch(console.error)
  }

  changeFirstName = (event) => {
    this.setState({ firstName: event.target.value })
  }

  changeLastName = (event) => {
    this.setState({ lastName: event.target.value })
  }

  changeEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  changeAddress = (event) => {
    this.setState({ address: event.target.value })
  }

  changeAptSuite = (event) => {
    this.setState({ aptSuite: event.target.value })
  }

  changeState = (event) => {
    this.setState({ state: event.target.value })
  }

  changeCity = (event) => {
    this.setState({ city: event.target.value })
  }

  changePhone = (event) => {
    this.setState({ phone: event.target.value })
  }

  render = () => {
    const { firstName, lastName, email, address, aptSuite, state, city, phone } = this.state

    return (
      <div className="navbar-signup">
        <button className="btn btn-flat btn-success" onClick={this.open}>New Customer</button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Create a new customer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <Row>
                <Col sm={6} xs={12}>
                  <Input type="text" label="First name" value={firstName} onChange={this.changeFirstName} />
                  <Input type="text" label="Last name" value={lastName} onChange={this.changeLastName} />
                  <Input type="email" label="Email Address" value={email} onChange={this.changeEmail} />
                </Col>

                <Col sm={6} xs={12}>
                  <Input type="text" label="Address" value={address} onChange={this.changeAddress} />
                  <Input type="text" label="Apt./Suite" value={aptSuite} onChange={this.changeAptSuite} />
                  <Input type="select" label="State" value={state} onChange={this.changeState}>
                    <option value="CA">CA</option>
                  </Input>
                  <Input type="text" label="City" value={city} onChange={this.changeCity} />
                  <Input type="text" label="Phone" value={phone} onChange={this.changePhone} />
                </Col>
              </Row>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.submit}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}