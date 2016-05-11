import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import  "./../../public/workouts.js"

import './../templates/main.html';

Template.explain.helpers({
      workouts: function () {
        return workout_list;
      }
});

Template.home.helpers({
    workouts: function () {
        return workout_list;
    }
});

Template.registerHelper("checkType", function(type, someStr) {
    return type == someStr;
});

Template.registerHelper("formatName", function(someStr) {
    return someStr.replace(/_/g, " ");
});

Template.home.events({
    //Handle the checkboxes
    'click .check': function(e){
        //e.preventDefault();
        console.log(e.target.id);
        console.log(e.target.checked);
        /*if(e.target.checked == true){
            e.target.checked = false;
        }
        else{
            e.target.checked = true;
        }*/
        console.log(e.target.checked);
    },

    //Handle Buttons
    'click #Double_Kill': function(e){
        console.log(e.target.id);
    },
    'click #Triple_Kill': function(e){
        console.log(e.target.id);
    },
    'click #Ultra_Kill': function(e){
        console.log(e.target.id);
    },
    'click #Godlike': function(e){
        console.log(e.target.id);
    },
    'click #BabyRage': function(e){
        console.log(e.target.id);
    },
    'click #Rampage': function(e){
        console.log(e.target.id);
    }
});