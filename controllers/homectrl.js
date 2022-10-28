//render the home page in the views


module.exports = {
    get: (req,res) => {
        res.render('home', { // the name of the HTML page...
            title: 'Home Page',
            layout: 'layout' 
        })
    }
};


