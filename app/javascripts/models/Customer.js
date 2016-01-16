import CouchDocument from './CouchDocument'
import Sale from './Sale'

export default class Customer extends CouchDocument {
  constructor(doc) {
    super(doc)
  }

  get id() {
    return parseInt(super.id)
  }

  get name() {
    return this.doc.firstName + ' ' + this.doc.lastName
  }

  sales() {
    return Sale.allForCustomer(parseInt(this.id))
  }

  static get(id) {
    return super.get('Customer_' + bid + '_' + id)
        .then(doc => {
          return new Customer(doc)
        })
        .catch(err => {
          console.error(err && err.stack || err)
        })
  }

  static all() {
    return super.all('Customer')
        .then(result => {
          return result.rows.map(row => {
            return new Customer(row.doc)
          })
        })
        .catch(console.error)
  }

  static nextId() {
    return Customer.all()
        .then(customers => {
          return customers.sort((a, b) => {
            return a.id > b.id
          })
        })
        .then(customers => {
          if (customers.length == 0) {
            return 1
          }

          return parseInt(customers.pop().id) + 1
        })
        .catch(console.error)
  }
}