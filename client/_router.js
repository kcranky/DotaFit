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