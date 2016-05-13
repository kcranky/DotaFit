Meteor.disconnect();

Session.set("squat", 10);
Session.set("p", 10);

var p = 0,
    squat = 0,
    double=0,
    triple=0,
    ultra=0,
    godlike=0,
    babyrage=0;

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

Template.home.onRendered(function() {
    document.getElementById("Win_First_Blood").checked = false;
    document.getElementById("GG_Called").checked = false;
    document.getElementById("Win_the_Game").checked = false;
});


Template.home.events({
    //Handle Buttons
    'click #Double_Kill': function(e){
        double++;
        document.getElementById('h'+e.target.id).innerHTML =  'Double Kill - ' + double;
        squat+=10;
    },
    'click #Triple_Kill': function(e){
        triple++;
        document.getElementById('h'+e.target.id).innerHTML =  'Triple Kill - ' + triple;
        squat+=15;
    },
    'click #Ultra_Kill': function(e){
        ultra++;
        document.getElementById('h'+e.target.id).innerHTML =  'Ultra Kill - ' + ultra;
        squat+=15;
    },
    'click #Godlike': function(e){
        godlike++;
        document.getElementById('h'+e.target.id).innerHTML =  'Godlike - ' + godlike;
        p+=10;
    },
    'click #BabyRage': function(e){
        babyrage++;
        document.getElementById('h'+e.target.id).innerHTML =  'BabyRage - ' + babyrage;
        p+=10;
    },
    'click #Rampage': function(e){
        p=0;
        squat=0;
        document.getElementById(e.target.id).className = "disabled waves-effect waves-light btn red";
    },

    //Submit form
    'click #getSwole': function(){
        calculate();
    }
});

function calculate(){
    //check checkboxes
    if(document.getElementById("Win_First_Blood").checked){
        p+=10;
    }
    if(document.getElementById("GG_Called").checked){
        squat+=10;
    }
    if(document.getElementById("Win_the_Game").checked){
        p+= 15;
    }

    //get the values from the spin edits
    p+= document.getElementById("Kills").value*3;
    p+= document.getElementById("Deaths").value*3;
    squat+= document.getElementById("Assists").value*5;

    Session.set("squat", Session.get('squat') + squat);
    Session.set("p", Session.get('p') + p);

    console.log(Session.get('squat'), Session.get('squat') + squat);
    console.log(Session.get('p'), Session.get('p') + p);

    //Reset the variables
    p=0;
    squat=0;
    double=0;
    triple=0;
    ultra=0;
    godlike=0;
    babyrage=0;

    Router.go('/results');
};
