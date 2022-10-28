//render the book catalog  page in the views


module.exports = {
    get: (req,res) => {
        res.render('bookCatalog', { // the name of the HTML page...
            title: 'Book Catalog',
            layout: 'layout' 
        })
    }
};