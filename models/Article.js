const db = require('../util/database');

module.exports = class Article {

    static fetchAll() {
        return db.execute('SELECT * FROM articles');
    }

    static findByUrl(url) {
        return db.execute(`SELECT * FROM articles WHERE url = ?`, [url]);
    }

}