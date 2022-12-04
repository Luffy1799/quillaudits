

var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var a4 = document.getElementById('a4');

var q1 = document.getElementById('q1');
var q2 = document.getElementById('q2');
var q3 = document.getElementById('q3');
var q4 = document.getElementById('q4');

var i1 = document.getElementById('i1');
var i2 = document.getElementById('i2');
var i3 = document.getElementById('i3');
var i4 = document.getElementById('i4');

q1.addEventListener("click", function(){ 

    if(a1.style.height == "0px") {
        a1.style.height = "70px";
        i1.style.transform = 'rotate(180deg)';
    }

    else {
        a1.style.height = "0px";
        i1.style.transform = 'rotate(0deg)';
    }

    
});
q2.addEventListener("click", function(){ 

    
    if( a2.style.height == "0px") {
        a2.style.height = "70px";
        i2.style.transform = 'rotate(180deg)';
    }

    else {
        a2.style.height = "0px";
        i2.style.transform = 'rotate(0deg)';
    }

});
q3.addEventListener("click", function(){ 

    
    if(a3.style.height == "0px") {
        a3.style.height = "70px";
        i3.style.transform = 'rotate(180deg)';
    }

    else {
        a3.style.height = "0px";
        i3.style.transform = 'rotate(0deg)';
    }

});
q4.addEventListener("click", function(){ 
    
    
    if(a4.style.height == "0px") {
        a4.style.height = "70px";
        i4.style.transform = 'rotate(180deg)';
    }

    else {
        a4.style.height = "0px";
        i4.style.transform = 'rotate(0deg)';
    }

});


