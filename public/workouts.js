/**
 * Created by LittlePanda on 10 May 2016.
 * Indexes all events and appropriate workouts
 */
workout_list = [
    {
        name: "Win_First_Blood",
        hint: "Did your team win first blood?",
        explain: "Adds 10 p-type exercises",
        fun: "GG! GG! GG!",
        type: "binary",
        exercise: "p",
        amount: 10,
    },
    {
        name: "GG_Called",
        hint: "Was GG called within 15 minutes?",
        explain: "Adds 10s worth of squats",
        fun: "He's Russian, right. Is he Russian?",
        type: "binary",
        exercise: "squat",
        amount: 10
    },
    {
        name: "Win_the_Game",
        hint: "Did you win?",
        explain: "15 p-type.",
        fun: "Oh, you lost? Shame. GET SWOLE NOT SAD",
        type: "binary",
        exercise: "p",
        amount: 15
    },
    {
        name:"Double_Kill",
        hint: "Click every time you get a double kill",
        explain: "Adds 5s worth of squats",
        fun: "Nice and easy",
        type: "increment",
        exercise: "squat",
        amount: 5
    },
    {
        name:"Triple_Kill",
        hint: "Click every time you get a triple kill",
        explain: "Adds 10s worth of squats",
        fun: "Woah, there tiger",
        type: "increment",
        exercise: "squat",
        amount: 10
    },
    {
        name:"Ultra_Kill",
        hint: "Click every time you get an ultra kill",
        explain: "Adds 10s squats exercises.",
        fun: "Ultra in game = Ultra IRL",
        type: "increment",
        exercise: "squat",
        amount: 10
    },
    {
        name:"Godlike",
        hint: "Click every time you get a godlike streak",
        explain: "Adds 10 p-type exercises.",
        fun: "Dude. Why are you even playing pub games?",
        type: "increment",
        exercise: "p",
        amount: 10
    },
    {
        name: "BabyRage",
        hint: "If someone starts ranting, moaning or spam pinging, click this button",
        explain: "Adds 5 p-type",
        fun: "Did someone babyrage? Do 5 pushups so you can PUNCH THEM IN THE FACE! *Flexes*",
        type: "increment",
        exercise: "p",
        amount: 10
    },
    {
        name: "Rampage",
        hint: "Click when you get a rampage!",
        explain: "Resets your so-far done work to 0",
        fun: "Ugh, GEEGEE! And don't abuse this, you're only cheating yourself. SMH",
        type: "reset",
        exercise: "n/a",
        amount: -1
    },
    {
        name: "Kills",
        hint: "Enter in your total amount of kills",
        explain: "3 p-type for each",
        fun: "Just don't kill in real life, m'kay?",
        type: "amount",
        exercise: "p",
        amount: 3
    },
    {
        name: "Deaths",
        hint: "Enter in total amount of deaths",
        explain: "3 p-type for each",
        fun: "YORMT - You only respawn multiple times",
        type: "amount",
        exercise: "p",
        amount: 3
    },
    {
        name: "Assists",
        hint: "Enter in your total amount of assists",
        explain: "Adds 5s squats for each one.",
        fun: "You need stronger legs, so you can carry better.",
        type: "amount",
        exercise: "squat",
        amount: 5
    }
]