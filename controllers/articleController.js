// Models
const Article = require('../models/Article');

exports.article = async (req, res, next) => {

    // Save url into a variable
    const url = req.params.url;

    // Create article obj
    const article = await new Article();
    const articleData = await article.showArticle(url);
    // console.log(await JSON.stringify(article));
    console.log(articleData);

    res.render('./articles/article', {
        pageTitle: url
    })

}
