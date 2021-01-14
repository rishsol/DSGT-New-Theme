const friday = {
    "4:30 PM": "Virtual Event Opens",
    "5:00 PM - 6:00 PM": "Opening Ceremony",
    "6:30 PM": "Hacking Begins",
    "7:00 PM - 8:30 PM": "Sponsor Fair",
    "7:00 PM - 8:30 PM": "Team Building",
    "8:30 PM - 9:15 PM": "Essential Data Science Skills",
    "9:30 PM - 10:30 PM": "Game Night, Hosted on Discord, TBD",
}

const saturday = {
    "1:45 PM - 2:30 PM": "CV Workshop",
    "1:45 PM - 2:30 PM": "Data Visualization Workshop",
    "2:45 PM - 3:30 PM": "Machine Learning",
    "2:45 PM - 3:30 PM": "Intro to Machine Learning", 
    "3:00 PM - 3:30 PM": "MLH Activity",
    "4:00 PM - 4:45 PM": "Igor Jablokov from Pryon",
    "5:00 PM - 5:30 PM": "Activities with company reps/mentors/participants",
    "8:00 PM - 8:45 PM": "Keith Werle",
    "9:00 PM - 9:45 PM": "Intro to Cloud Computing",
    "10:00 PM - 10:45 PM": "Deep Learning",
}

const sunday = {
    "12:00 PM - 12:45 PM": "Super Cool Data Science Startup founder",
    "1:00 PM - 1:30 PM": "Fireside Chat and Origami",
    "3:00 PM - 3:30 PM": "Pitching Your Project Style",
    "3:00 PM": "Hacking Ends",
    "3:30 PM - 5:00 PM": "Expo & Judging",
}

function schedule_populate() {
    const friday_schedule = document.getElementById("friday_schedule_table");
    const saturday_schedule = document.getElementById("saturday_schedule_table");
    const sunday_schedule = document.getElementById("sunday_schedule_table");
    // populate friday schedule
    for (item in friday) {
        var row = document.createElement("tr");
        row.classList.add("row");
        var leftCell = document.createElement("td");
        var leftNode = document.createTextNode(item);
        leftCell.appendChild(leftNode);
        leftCell.classList.add("col-12");
        leftCell.classList.add("col-md-4");
        leftCell.classList.add("m-md-2");
        var rightCell = document.createElement("td");
        var rightNode = document.createTextNode(friday[item]);
        rightCell.appendChild(rightNode);
        rightCell.classList.add("col-12");
        rightCell.classList.add("col-md-7");
        rightCell.classList.add("ms-4")
        rightCell.classList.add("m-md-2");
        rightCell.style.whiteSpace = "pre-wrap";
        row.appendChild(leftCell);
        row.appendChild(rightCell);
        friday_schedule.appendChild(row);
    }
    // populate saturday schedule
    for (item in saturday) {
        var row = document.createElement("tr");
        row.classList.add("row");
        var leftCell = document.createElement("td");
        var leftNode = document.createTextNode(item);
        leftCell.appendChild(leftNode);
        leftCell.classList.add("col-12");
        leftCell.classList.add("col-md-4");
        leftCell.classList.add("m-md-2");
        var rightCell = document.createElement("td");
        var rightNode = document.createTextNode(saturday[item]);
        rightCell.appendChild(rightNode);
        rightCell.classList.add("col-12");
        rightCell.classList.add("col-md-7");
        rightCell.classList.add("ms-4")
        rightCell.classList.add("m-md-2");
        rightCell.style.whiteSpace = "pre-wrap";
        row.appendChild(leftCell);
        row.appendChild(rightCell);
        saturday_schedule.appendChild(row);
    }
    // populate sunday schedule
    for (item in sunday) {
        var row = document.createElement("tr");
        row.classList.add("row");
        var leftCell = document.createElement("td");
        var leftNode = document.createTextNode(item);
        leftCell.appendChild(leftNode);
        leftCell.classList.add("col-12");
        leftCell.classList.add("col-md-4");
        leftCell.classList.add("m-md-2");
        var rightCell = document.createElement("td");
        var rightNode = document.createTextNode(sunday[item]);
        rightCell.appendChild(rightNode);
        rightCell.classList.add("col-12");
        rightCell.classList.add("col-md-7");
        rightCell.classList.add("ms-4")
        rightCell.classList.add("m-md-2");
        rightCell.style.whiteSpace = "pre-wrap";
        row.appendChild(leftCell);
        row.appendChild(rightCell);
        sunday_schedule.appendChild(row);
    }
}

function friday_toggle() {
    // Highlight friday button
    document.getElementById("friday_button").style.boxShadow = "0px 0px 10px #ECAE58";
    document.getElementById("saturday_button").style.boxShadow = "0px 0px 0px #ECAE58";
    document.getElementById("sunday_button").style.boxShadow = "0px 0px 0px #ECAE58";

    // load friday schedule
    const friday_schedule = document.getElementById("friday_schedule");
    const saturday_schedule = document.getElementById("saturday_schedule");
    const sunday_schedule = document.getElementById("sunday_schedule");
    friday_schedule.style.display = "block";
    saturday_schedule.style.display = "None"
    sunday_schedule.style.display = "None";
}

function saturday_toggle() {
    // Highlight saturday button
    document.getElementById("friday_button").style.boxShadow = "0px 0px 0px #ECAE58";
    document.getElementById("saturday_button").style.boxShadow = "0px 0px 10px #ECAE58";
    document.getElementById("sunday_button").style.boxShadow = "0px 0px 0px #ECAE58";

    // load saturday schedule
    const friday_schedule = document.getElementById("friday_schedule");
    const saturday_schedule = document.getElementById("saturday_schedule");
    const sunday_schedule = document.getElementById("sunday_schedule");
    friday_schedule.style.display = "None";
    saturday_schedule.style.display = "block"
    sunday_schedule.style.display = "None";
}

function sunday_toggle() {
    // Highlight sunday button
    document.getElementById("friday_button").style.boxShadow = "0px 0px 0px #ECAE58";
    document.getElementById("saturday_button").style.boxShadow = "0px 0px 0px #ECAE58";
    document.getElementById("sunday_button").style.boxShadow = "0px 0px 10px #ECAE58";

    // load sunday schedule
    const friday_schedule = document.getElementById("friday_schedule");
    const saturday_schedule = document.getElementById("saturday_schedule");
    const sunday_schedule = document.getElementById("sunday_schedule");
    friday_schedule.style.display = "None";
    saturday_schedule.style.display = "None"
    sunday_schedule.style.display = "block";
}