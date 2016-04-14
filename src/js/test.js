function test1(){
    var KlickButton = document.getElementById("klick");
    var test = document.getElementById("einstieg");
    
    KlickButton.addEventListener('click',doSomething,false);
    
    function doSomething(){
        test.textContent="Herzlich Willkommen";
    }
}