
class SiteController {
    // [GET]  /new
    home(rep, res){
        res.render('home')
    }

    search(rep,res){
        res.render('search')
    }
}
module.exports = new SiteController;