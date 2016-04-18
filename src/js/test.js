function test1(){
    var $klickButton = $("#klick");
    var $test = $("#einstieg");
    var istHerzlich = false;
    $klickButton.on("click",doSomething);
    
    function doSomething(){
        if (!istHerzlich){
            $test.text("Herzlich Willkommen");
            istHerzlich = true;
        } else{
            $test.text("Willkommen");
            istHerzlich = false;
        }
    }
}


function schleife(){
    var $klick = $("#schleife");
    var anfang = 0;
    var $zeichen = $("#zahlen2");
    $klick.on("click", function(){
        console.log("click");
        for (anfang; anfang < 15; anfang++){
            var text =$zeichen.html() + "<br />Das ist die Zahl: " + anfang;
            $zeichen.html(text);
        } 
    })
    
    
    
}


function PersonalAusweis(firstname, lastname, birthday, nationality, birthplace, validTill, perso_id){
    this.lastname = lastname;
    this.firstname = firstname;
    this.birthday =  birthday;
    this.nationality = nationality;
    this.birthplace = birthplace;
    this.validTill = validTill;
    this.perso_id = perso_id;
    this.getName = function(){
        return this.firstname +" " + this.lastname;
    }
    this.getBirthdayText = function(){
        return this.birthday + " (" + this.birthplace + ")";
    }
}

var testPerso = new PersonalAusweis("Melanie", "Kunz","05.07.1985", "deutsch", "Köln", "19.09.2019", "ST5P6W2AV");


$(function(){
    $("#personen").text(testPerso.getName() + " " + testPerso.getBirthdayText());
});