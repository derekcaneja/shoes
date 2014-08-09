var hhBrown = require('hhbrown');

hhBrown.connect('53e629fe2009340200000022', 'CvbfKmMkDkdlXUU4tUHsMaMr');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.color = function(req, res){
  res.render('color', { title: 'Express' });
};

exports.results = function(req, res){
  res.render('products', { title: 'Express' });
};

exports.slideshow = function(req,res){
  res.render('slideshow', {title: 'Slideshow'});
};


exports.api = function(req, res) {
	var dataSet = req.body.dataSet;

	req.body.dataSet = undefined;

	if(!hhBrown.access_token) {
		hhBrown.connect('53e629fe2009340200000022', 'CvbfKmMkDkdlXUU4tUHsMaMr', function() {
			hhBrown.get(dataSet, req.params, function() {
				res.send(shoes);
			});
		});
	} else {
		hhBrown.get(dataSet, req.body, function(shoes) {
			res.send(shoes);
		});
	}
}
