// Models
const Article = require('../models/Article');

exports.getArticle = (req, res, next) => {
    // Save url into a variable
    const url = req.params.url;

    Article.findByUrl(url)
        .then(([rows, fields]) => {
            let flag = false;
            for (let index = 0; index < rows.length; index++) {
                if (rows[index].url === url) {
                    flag = true;
                    res.render('./articles/article', {
                        pageTitle: url,
                        articleTitle: rows[index].title,
                        articleDescription: rows[index].description,
                        articleContent: rows[index].content,
                        articleImgeUrl: rows[index].imageUrl
                    });
                }
            }

            if (!flag) {
                /**
                 * TODO: Redirect to error 404 template once it will be ready
                 */
                res.redirect('/');
            }
        })
        .catch(err => console.log(err));
}

exports.getAllArticles = (req, res, next) => {
    Article.fetchAll()
        .then(([rows, fields]) => {
            res.render('./articles/articles', {
                pageTitle: 'All Articles',
                getAllArticles: rows
            });
        })
        .catch(err => console.log(err));
}
