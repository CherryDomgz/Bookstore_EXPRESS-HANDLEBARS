//render the information page in the views

module.exports = {
    get: (req,res) => {
        res.render('information', { // the name of the HTML page...
            title: 'Information',
            layout: 'layout' 
        })
    }
};