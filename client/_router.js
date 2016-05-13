/**
 * Created by LittlePanda on 10 May 2016.
 */

Router.configure({
    layoutTemplate: 'sidenav'
});

Router.route('/', function () {
    this.render('home');
});

Router.route('/explain', function () {
    this.render('explain');
});

Router.route('/results', function () {
    this.render('results');
});

Router.route('/about', function () {
    this.render('about');
});