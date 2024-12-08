let Snake =document.getElementById("snake"); ;
let hiddenText =document.getElementById('hiddenText');
let status;
Snake.addEventListener('click', function(){
hiddenText.style.display = 'block';
status = "active"
})