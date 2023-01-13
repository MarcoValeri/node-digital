const db = require('../util/database');

module.exports = class Article {

    constructor(id, title, description, url, content, imageUrl, published, updated) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
        this.content = content;
        this.imageUrl = imageUrl;
        this.published = published;
        this.updated = updated;
    }

    save() {
        return db.execute(
            'INSERT INTO articles (title, description, url, content, imageUrl, published, updated) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [this.title, this.description, this.url, this.content, this.imageUrl, this.published, this.updated]
            );
    }

    edit() {
        return db.execute(
            'UPDATE articles SET title = ?, description = ?, url = ?, content = ?, imageUrl = ?, published = ?, updated = ? WHERE id = ?',
            [this.title, this.description, this.url, this.content, this.imageUrl, this.published, this.updated, this.id]
        );
    }

    delete() {
        return db.execute(
            'DELETE FROM articles WHERE id = ?',
            [this.id]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM articles');
    }

    static findByUrl(url) {
        return db.execute(`SELECT * FROM articles WHERE url = ?`, [url]);
    }

}