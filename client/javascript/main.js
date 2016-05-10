import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import  "./../../public/workouts.js"

import './../templates/main.html';

Template.explain.helpers({
      workouts: function () {
        return workout_list;
      }
});