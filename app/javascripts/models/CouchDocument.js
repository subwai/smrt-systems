export default class CouchDocument {
  constructor(doc) {
    this.doc = doc;
  }

  get id() {
    return this.doc._id.split('_', 3)[2];
  }

  put() {
    return db.put(this.doc);
  }

  static get(id) {
    return db.get(id);
  }

  static all(type, ...query) {
    var params = [type]
    params.push(bid)
    params.push(...query)

    let key = params.join('_') + '_'
    return db.allDocs({ include_docs: true, startkey: key, endkey: key + '\uffff' });
  }
}