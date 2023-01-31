class SiteController {
  // [Get =&gt; home]
  index(req, res) {
    res.render('home');
  }

  // [Get =&gt; search]
  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController();
