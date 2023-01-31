class NewsController {
    // [Get =&gt; news]
    index(req, res) {        
        res.render('news');
    }
}
module.exports = new NewsController;