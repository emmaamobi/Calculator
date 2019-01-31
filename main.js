//Get all the keys from the body
var keys = document.getElementsByTagName('td');
var funcs = ['+','-','x','/'];
function showVal(e){
    //get the input values
    var input = document.querySelector('.screen');
    var inputValue = input.innerHTML;
    var btnValue = this.innerHTML;
    //Get the key values and append it to the input string, and evaluate it.
    //Set the input to empty if clear is pressed, to.
    if(btnValue === 'C'){
        input.innerHTML = '';
    }
    //Use regex and replace 'x' with '*', so it evaluates properly 
    eqn = eqn.replace(/x/g,'*');
    //Calculate and display the solution if '=' is pressed
    else if(btnValue === '='){
        let eqn = inputValue;
        input.innerHTML = eval(eqn);

    }
    //If any key is pressed append it 
    else{
        input.innerHTML += btnValue;
    }
}
//Add onclick events
for (let i = 0; i < keys.length; i++){
    keys[i].addEventListener('click',showVal)
}



