// Models
const Article = require('../models/Article');

exports.adminDashboard = (req, res, next) => {
    res.render('./admin/dashboard', {
        pageTitle: 'Admin Dashboard'
    })
}

exports.adminArticles = (req, res, next) => {
    Article.fetchAll()
        .then(([rows, fields]) => {
            res.render('./admin/articles', {
                pageTitle: 'Admin Articles',
                allArticles: rows
            })
        })
        .catch(err => console.log(err));
}

exports.adminNewArticle = (req, res, next) => {
    res.render('./admin/add-new-article', {
        pageTitle: 'Admin Add New Article'
    })
}