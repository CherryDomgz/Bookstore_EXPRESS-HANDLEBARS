//render the registration  page in the views


module.exports = {
    get: (req,res) => {
        res.render('registration', { // the name of the HTML page...
                title: 'Registration',
                layout: 'layout' 
            })
    }
};