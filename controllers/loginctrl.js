//render the log in  page in the views


module.exports = {
    get: (req,res) => {
        res.render('login', { // the name of the HTML page...
            title: 'Login',
            layout: 'layout' 
        })
    }
};