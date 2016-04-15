function test1(){
    var KlickButton = document.getElementById("klick");
    var test = document.getElementById("einstieg");
    var istHerzlich = false;
    
    KlickButton.addEventListener('click',doSomething,false);
    
    function doSomething(){
        if (!istHerzlich){
            test.textContent="Herzlich Willkommen";
            istHerzlich = true;
        } else{
            test.textContent="Willkommen";
            istHerzlich = false;
        }
    }
}

