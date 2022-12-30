function switchBulb () {
var image=document.getElementById('light');
var buttons=document.getElementById('button');

if(image.src.match("bulbOn")){
    image.src="bulbOff.jpg";
    buttons.src="buttonOff.jpg";
}
else{
    image.src="bulbOn.jpg";
    buttons.src="buttonOn.jpg";
}
}