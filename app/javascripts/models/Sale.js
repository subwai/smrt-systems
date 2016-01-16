import CouchDocument from './CouchDocument'

export default class Sale extends CouchDocument {
  get status () {
    return this.doc.status;
  }

  static get (id) {
    return super.get(id)
        .then(doc => {
          return new Sale(doc)
        })
        .catch(err => {
          console.error(err && err.stack || err)
        })
  }

  static allForCustomer(custid) {
    return db.query('customer/current_sales', {key: [bid, custid], include_docs: true})
        .then(result => {
          return result.rows.map(row => {
            return new Sale(row.doc)
          })
        })
  }
}