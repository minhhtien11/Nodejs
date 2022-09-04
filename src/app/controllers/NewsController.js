class NewsController {
    // [GET]  /new
    index(rep, res) {
        res.render('news');
    }

    show(rep, res) {
        res.send('ádadasdasdasd');
    }
}
module.exports = new NewsController();
