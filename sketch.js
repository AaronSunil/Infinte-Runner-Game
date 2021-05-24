//Create variables here
var database, changeState, readState;
var happyDog;
var foodObj, foodObjImg;

function preload()
{
	//load images here
  happyDog = loadImage("images/happydog.png");
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  
  dog = createSprite(200,200,50,50);
  dog.addImage(happyDog);

  foodObj = new Food();


  readState =  database.ref('gameState');
  readState.on("value",function(data){
    gameState = data.val();
  })
}


function draw() {  

  background(46, 139, 87);

  drawSprites();

  //add styles here
  display()
  {

  }
  
}

  function update(state)
    {
      database.ref('/').update({
      gameState:state
    })
}

