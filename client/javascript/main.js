import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import  "./../../public/workouts.js"

import './../templates/main.html';
import './../templates/home.html';



Template.explain.helpers({
      workouts: function () {
        return workout_list;
      }
});

Template.results.helpers({
   pAmount: function(){
       return Math.round(Session.get('pUse'));
   },
    squats: function() {
        return Math.round(Session.get('squatUse'));
    }
});

Template.results.onRendered(function() {
    Session.set('pUse', Session.get('p'));
    Session.set('squatUse', Session.get('squat'));
    document.getElementById("swole").value = 1;
});

Template.results.events({
    'click .newGame': function(){
        Session.set('p', 0);
        Session.set('squat', 0);
        Session.set('pUse', 0);
        Session.set('squatUse', 0);
        Router.go('/');
    },
    'change input[id=swole]': function(event){
        Session.set('pUse', Session.get('p') + (Session.get('p')*event.target.value*0.05));
        Session.set('squatUse', Session.get('squat') + (Session.get('squat')*0.05*event.target.value));
    }
});
