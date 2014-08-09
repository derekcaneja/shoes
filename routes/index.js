exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.color = function(req, res){
  res.render('color', { title: 'Express' });
};
exports.results = function(req, res){
  res.render('products', { title: 'Express' });
};
