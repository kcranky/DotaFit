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
        addExercise(e.target.id);
    },
    'click #Triple_Kill': function(e){
        triple++;
        document.getElementById('h'+e.target.id).innerHTML =  'Triple Kill - ' + triple;
        addExercise(e.target.id);
    },
    'click #Ultra_Kill': function(e){
        ultra++;
        document.getElementById('h'+e.target.id).innerHTML =  'Ultra Kill - ' + ultra;
        addExercise(e.target.id);
    },
    'click #Godlike': function(e){
        godlike++;
        document.getElementById('h'+e.target.id).innerHTML =  'Godlike - ' + godlike;
        addExercise(e.target.id);
    },
    'click #BabyRage': function(e){
        babyrage++;
        document.getElementById('h'+e.target.id).innerHTML =  'BabyRage - ' + babyrage;
        addExercise(e.target.id);
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
        addExercise("Win_First_Blood");
    }
    if(document.getElementById("GG_Called").checked){
        addExercise("GG_Called");
    }
    if(document.getElementById("Win_the_Game").checked){
        addExercise("Win_the_Game");
    }

    //get the values from the spin edits
    p+= document.getElementById("Kills").value*(addExercise("Kills")-1);
    p+= document.getElementById("Deaths").value*(addExercise("Deaths")-1);
    squat+= document.getElementById("Assists").value*(addExercise("Assists")-1);

    Session.set("squat", Session.get('squat') + squat);
    Session.set("p", Session.get('p') + p);

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


function addExercise(name){
    for(var i=0; i<=workout_list.length; i++){
        if (workout_list[i].name == name){
            if(workout_list[i].exercise == 'p'){
                p+= workout_list[i].amount;
                return workout_list[i].amount;
            }
            else if (workout_list[i].exercise == 'squat'){
                squat+= workout_list[i].amount;
                return workout_list[i].amount;
            }
            else{
                console.log("exercise type not found");
            }
        }
    }
};
