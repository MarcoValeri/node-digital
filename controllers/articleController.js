// Models
const Article = require('../models/Article');

exports.getArticle = (req, res, next) => {
    // Save url into a variable
    const url = req.params.url;
    
    Article.fetchAll((articles) => {
        console.log(articles);
        res.render('./articles/article', {
            pageTitle: url,
            articleData: articles
        });
    });
}