/* GET home page. */
function getHomepage(req, res, next) {
  res.render('index', { title: 'Express' });
};

module.exports = getHomepage;