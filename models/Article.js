const mysql = require('mysql');

module.exports = class Article {

    addArticle(title, description, url, content) {
        const sqlQuery = `INSERT INTO articles(title, description, url, content) VALUES('${title}', '${description}', '${url}', '${content}')`;

        const connectionDb = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'node_digital'
        });

        connectionDb.connect(err => {
            if (err) throw err;
            console.log(`Connected to the db...`);

            connectionDb.query(sqlQuery, (err, result) => {
                if (err) throw err;
                console.log(`New article has been added`);
            })
        })
    }

    showArticle(url) {

        const sqlQuery = `SELECT * FROM articles WHERE url='${url}'`;

        const connectionDb = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'node_digital'
        });

        connectionDb.connect(err => {
            if (err) throw err;
            console.log(`Connected to the db...`);

            connectionDb.query(sqlQuery, (err, result) => {
                if (err) throw err;
                // console.log(JSON.stringify(result));
                return result;
            })
        })

    }

}
