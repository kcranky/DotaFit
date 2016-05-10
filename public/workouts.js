/**
 * Created by LittlePanda on 10 May 2016.
 * Indexes all events and appropriate workouts
 */
workout_list = [
    {
        name: "First Blood",
        hint: "Did you win or loose first blood?",
        explain: "Adds 10/15 p-type exercises, depending",
        fun: "GG! GG! GG!",
        type: "binary",
        exercise: "p",
        amount_win: 10,
        amount_loose: 15
    },
    {
        name: "GG Call",
        hint: "Was GG called within 15 minutes?",
        explain: "Adds 10s worth of squats",
        fun: "He's Russian, right. Is he Russian?",
        type: "binary",
        exercise: "squat",
        amount_win: 10
    },
    {
        name:"Double Kill",
        hint: "Click every time you get a double kill",
        explain: "Adds 10s worth of squats",
        fun: "Nice and easy",
        type: "increment",
        exercise: "squat",
        amount: 10
    },
    {
        name:"Triple Kill",
        hint: "Click every time you get a triple kill",
        explain: "Adds 15s worth of squats",
        fun: "Woah, there tiger",
        type: "increment",
        exercise: "squat",
        amount: 15
    },
    {
        name:"Ultra Kill",
        hint: "Click every time you get an ultra kill",
        explain: "Adds 15 p-type exercises.",
        fun: "Ultra in game = Ultra IRL",
        type: "increment",
        exercise: "p",
        amount: 15
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
        name: "Kill",
        hint: "Enter in your total amount of kills",
        explain: "3 p-type for each",
        fun: "Just don't kill in real life, m'kay?",
        type: "amount",
        exercise: "p",
        amount: 3
    },
    {
        name: "Death",
        hint: "Enter in total amount of deaths",
        explain: "3 p-type for each",
        fun: "YORMT - You only respawn multiple times",
        type: "amount",
        exercise: "p",
        amount: 3
    },
    {
        name: "Assist",
        hint: "Enter in your total amount of assists",
        explain: "Adds 5s squats for each one.",
        fun: "You need stronger legs, so you can carry better.",
        type: "increment",
        exercise: "squat",
        amount: 5
    },
    {
        name: "Game Outcome",
        hint: "Did you win or loose?",
        explain: "10/15 p-type, depending.",
        fun: "Shame. Or Yay. I really don't care. GET SWOLE NOT SAD",
        type: "binary",
        exercise: "p",
        amount: 0
    },
    {
        name: "BabyRage",
        hint: "If someone starts ranting, moaning or spam pinging, click this button",
        explain: "Adds 15 p-type",
        fun: "Did someone babyrage? Do 15 pushups so you can PUNCH THEM IN THE FACE! *Flexes*",
        type: "increment",
        exercise: "p",
        amount: 15
    }
]