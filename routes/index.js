var projects = require('../projects.json');
var viewA;

/*
 * GET home page.
 */

exports.view = function(request, response){
  	response.render('index', projects);
  	//adding property viewAlt to projects, slide 31-
	projects.viewA = false;
};

exports.viewAlt = function(request,response){
	response.render('index', projects);
	projects.viewA = true;
};