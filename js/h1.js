    
document.getElementById('questions').style.display = "none";
document.getElementById('result').style.display = "none";

$('.check1 input:checkbox').click(function() {
    $('.check1 input:checkbox').not(this).prop('checked', false);
});
$('.check2 input:checkbox').click(function() {
    $('.check2 input:checkbox').not(this).prop('checked', false);
});  
$('.check3 input:checkbox').click(function() {
    $('.check3 input:checkbox').not(this).prop('checked', false);
});  
$('.check4 input:checkbox').click(function() {
    $('.check4 input:checkbox').not(this).prop('checked', false);
});  
$('.check5 input:checkbox').click(function() {
    $('.check5 input:checkbox').not(this).prop('checked', false);
});  
$('.check6 input:checkbox').click(function() {
    $('.check6 input:checkbox').not(this).prop('checked', false);
});  
$('.check7 input:checkbox').click(function() {
    $('.check7 input:checkbox').not(this).prop('checked', false);
});  
$('.check8 input:checkbox').click(function() {
    $('.check8 input:checkbox').not(this).prop('checked', false);
});  
$('.check9 input:checkbox').click(function() {
    $('.check9 input:checkbox').not(this).prop('checked', false);
});    
$('.check10 input:checkbox').click(function() {
    $('.check10 input:checkbox').not(this).prop('checked', false);
}); 

function start() {
    document.getElementById('button').style.display = "none";
    document.getElementById('questions').style.display = "inline";
    document.getElementById('result').style.display = "none";
    document.body.style.background="#FFFFFF";
}
 
function calculate(){
    document.getElementById('questions').style.display = "none";
    document.getElementById('result').style.display = "inline";
    var Name = document.getElementById("name").value;
    var Age = document.getElementById("age").value;
    var Weight = document.getElementById("weight").value;
    var Height = document.getElementById("height").value;

    var d_name = document.getElementById("Name");
    d_name.innerHTML ="<p>Name: "+Name+"</p>";

    var d_age = document.getElementById("Age");
    var year = new Date().getFullYear(); 
    var dob = year - Age;
    d_age.innerHTML = "<p>Age: "+Age+" "+"D.O.B: "+dob+"</p>" ;
    console.log(Age)

    var h = Height/3.281;
    
    var bmi = Weight/h**2
    var result=bmi.toFixed(2);

    document.getElementById("bmi").innerText = result;

    var d_bmi_sugg = document.getElementById("bmi-report");

    if (result <= 16.0 ) {
        console.log("Severely Underweight");
        d_bmi_sugg.innerHTML =  "<p>BMI-Report: You are Severely Underweight</p>";
    }
    else if(result >= 16.0 && result <= 18.4  ) {
        console.log("Underweight");
        d_bmi_sugg.innerHTML = "<p>BMI-Report: You are Underweight</p>";
    }
    else if (result >= 18.5 && result <= 24.9) {
        console.log("Normal");
        d_bmi_sugg.innerHTML ="<p>BMI-Report: You are Normal</p>";
    }
    else if (result >= 25.0 && result <= 29.9) {
        console.log("Overweight");
        d_bmi_sugg.innerHTML = "<p>BMI-Report: You are Overweight</p>";
    }
    else if (result >= 30.0 && result <= 34.9) {
        console.log("Moderetly Obese");
        d_bmi_sugg.innerHTML = "<p>BMI-Report: You are Moderetly Obese</p>";
    }
    else if (result >=35.0 && result <= 39.9){
        console.log("Severely Obese");
        d_bmi_sugg.innerHTML = "<p>BMI-Report: You are Severely Obese</p>";
    }
    else if (result >= 40.0){
        console.log("Morbidly Obese");
        d_bmi_sugg.innerHTML = "<p>BMI-Report: You are Morbidly Obese</p>";
    };

    console.log(result)

    d_covid = document.getElementById("covid-report");
    d_covid_sugg = document.getElementById("covid-suggestion");
    covid = document.querySelectorAll('.radio-5:checked').length;
    if (covid == 0){
        console.log("no risk")
        d_covid.innerHTML= "No Risk" ;
    }
    else if (covid >= 1 && covid <=3){
        console.log("Low risk")
        d_covid.innerHTML= "<p>Covid-19 Risk: You have Low Risk</p>" ;
    }
    else if (covid >= 4 && covid <=6){
        console.log("Modereate Risk")
        console.log("You can contact doctor if you wish")
        d_covid.innerHTML= "<p>Covid-19 Risk: You have Modereate Risk" ;
        d_covid_sugg.innerHTML= "<p>Covid-19 Suggestions:You can contact doctor</p>"
    }
    else if (covid >= 7 && covi1 <=10){
        console.log("High Risk");
        console.log("You need to contact doctor immediately")
        d_covid.innerHTML= "<p>Covid-19 Risk: You have High Risk</p>" ;
        d_covid_sugg.innerHTML= "<p>Covid-19 Suggestions: You need to contact doctor immediately</p>"
    }
    console.log(covid)

    d_depp = document.getElementById("depression-report");
    d_depp_sugg = document.getElementById("depression-suggestion");
    depression = document.querySelectorAll('.check1:checked').length;
    if (depression == 0){
        console.log("You are not Depressed")
        d_depp.innerHTML = "<p>Stress result: You are not Depressed</p>";
    }
    if (depression >= 1 && depression <= 4){
        console.log("You are little bit stressed, but mentally healthy")
        console.log("Talk with your friends and family as much as you can")
        d_depp.innerHTML = "<p>Stress result: You are moderately stressed, but mentally healthy</p>";
        d_depp_sugg.innerHTML = "<p>Stress Suggestions: Talk with your friends and family as much as you can !!</p>";
    }
    if (depression >= 5 && depression <= 8){
        console.log("You are stressed and a liitle bit mentally unhealthy")
        console.log("Try to contact a therapist")
        d_depp.innerHTML = "<p>Stress result: You are stressed and a liitle bit mentally unhealthy</p>";
        d_depp_sugg.innerHTML = "<p>Stress Suggestions: Try to contact a therapist!!</p>";
    }
    if (depression >= 9 && depression <= 10){
        console.log("You are extremely stressed and depressed and mentally unhealthy")
        console.log("Try to contact a therapist")
        d_depp.innerHTML = "<p>Stress result: You are extremely stressed and depressed and mentally unhealthy</p>";
        d_depp_sugg.innerHTML = "<p>Stress Suggestions: Try to contact a therapist and a Psychiatrists !!</p>";
    }

    console.log(depression)


    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
    var d = covid*10;
    var remain = 100-d; 
    var data = google.visualization.arrayToDataTable([
        ['Report', 'Risk Percentage'],
        ['Covid Risk', d],
        ['NO Risk' , remain]
        ]);

    var dep = depression*10;
    var r = 100-dep;
    var data2 =google.visualization.arrayToDataTable([
        ['Report', 'Stress Percentage'],
        ['Stressed', dep],
        ['Healthy' , r]
        ]);

    var chart = new google.visualization.PieChart(document.getElementById('covid-chart'));
    chart.draw(data);

    var chart = new google.visualization.PieChart(document.getElementById('depression-chart'));
    chart.draw(data2);
    }
}
  