// Models
const Article = require('../models/Article');

exports.article = (req, res, next) => {

    const url = req.params.url;

    // Create Article Obj
    const getArticle = new Article();
    const articleObj = getArticle.showArticle(url);

    console.log(`articleObj: ${articleObj}`);
    console.log(JSON.stringify(articleObj));
    console.log(articleObj);

    res.render('./articles/article', {
        pageTitle: url
    })

}
