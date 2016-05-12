Meteor.disconnect();

import './../templates/sidenav.html';

Template.sidenav.onRendered( function () {
    $('.button-collapse').sideNav({
        closeOnClick: true
    });
});