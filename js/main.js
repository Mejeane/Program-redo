'use strict'

// JS For Password Checkpass //


let loginbtn = document.getElementById('loginBtn');


function checkpass()
{
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	var goodColor = "#e057a5";
	var badColor = "#968e93";

	var pass = document.getElementById('password');

    if (username === 'mejeane' && password === 'woohoo') {

    	alert('Username and Password correct!');

    	pass.style.backgroundColor = goodColor;
    
    } else {
    	alert('Nope,sorry!');

		pass.style.backgroundColor = badColor;	

    }

}

loginbtn.addEventListener('click', function(e)
{
	e.preventDefault();
	
	checkpass();

});


// JS For Current Date //

  
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; 
	var yyyy = today.getFullYear();

	if (dd<10) {
	    dd = '0'+dd
	} 

	if (mm<10) {
	    mm = '0'+mm
	} 

	var today = dd + '/' + mm + '/' + yyyy;

    





