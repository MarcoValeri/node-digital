exports.article = (req, res, next) => {
    const url = req.params.url;

    res.render('./articles/article', {
        pageTitle: url
    })
}
