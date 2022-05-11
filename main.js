canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background = "parkingLot.jpg";
greencar = "car2.png";
greencar_width=90;
greencar_height=150;



greencar_X=200;
greencar_Y=200;

function add() {
	background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src=background;
    greencar_imgtag=new Image();
    greencar_imgtag.onload=uploadgreencar;
    greencar_imgtag.src=greencar;
}


function uploadBackground() {
	ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height)

}

function uploadgreencar() {
    ctx.drawImage(greencar_imgtag,greencar_X,greencar_Y,greencar_width,greencar_height);
	
}


window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=="37"){
        left();
    }
    if (keypressed=="38"){
        up();
    }
    if (keypressed=="39"){
        right();
    }
    if (keypressed=="40"){
        down();
    }
}
function up(){
    if (greencar_Y>0){
        greencar_Y=greencar_Y-10;
        uploadBackground();
        uploadgreencar();
    }
}
function down(){
    if (greencar_Y<500){
        greencar_Y=greencar_Y+10;
        uploadBackground();
        uploadgreencar();
    }
}
function right(){
    if (greencar_X<700){
        greencar_X=greencar_X+10;
        uploadBackground();
        uploadgreencar();
    }
}
function left(){
    if (greencar_X>0){
        greencar_X=greencar_X-10;
        uploadBackground();
        uploadgreencar();
    }
}
