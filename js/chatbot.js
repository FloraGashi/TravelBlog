var questionNum = 0;	                                          // Zähler für die Anzahl Fragen
var question = '<h1>Wie heisst du?</h1>';

var output = document.getElementById('output');
output.innerHTML = question;		                              // Erste Frage 'Wie heisst du' wird ausgegeben

function bot() {
    var input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
        output.innerHTML = '<h1>Hallo ' + input + '</h1>';        // Ausgabe vom eingegebenen Namen
        document.getElementById("input").value = "";     // Textbox leeren
        question = '<h1>Wie alt bist du?</h1>';			    	  // Laden der nächsten Frage
        setTimeout(timedQuestion, 2000);
    }

    else if (questionNum == 1) {
        output.innerHTML = '<h1>Das heisst du bist im Jahr ' + (2019 - input) + ' geboren</h1>';
        document.getElementById("input").value = "";
        question = '<h1>Woher kommst du</h1>';
        setTimeout(timedQuestion, 2000);
    }

    else if (questionNum == 2) {
        output.innerHTML = '<h1>' + (input) + ' ist wunderschön!</h1>';
        document.getElementById("input").value = "";

    }
}

function timedQuestion() {
    output.innerHTML = question;
}

$(document).keypress(function(e) {
    if (e.which == 13) {
        bot();
        questionNum++;
    }
});