//Defining variables for button, the modal and the close button, then change the display 

var button = document.getElementById('ebook');
var modal = document.getElementById('page-modal');
var close = document.getElementsByClassName('modal-close')[0];

button.onclick = function(){
    modal.style.display = 'block';
}

close.onclick = function(){
    modal.style.display = 'none';
}