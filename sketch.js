var background1,background2, background1Img,background2Img;
var bike,bikeImg;
var edges;
var crashImg,barImg,coneImg,policeImg;
var obstacleGroup
var Gamestate
var Gamecounter
var Level
var peopleGroup
var jetcount = 0;

function preload(){

  background1Img = loadImage("road.png");
  bikeImg = loadImage("bike.png")
  barImg = loadImage("barricade.png");
  crashImg = loadImage("car crash.png");
  coneImg = loadImage("traffic cone.png");
  policeImg = loadImage("police car1.png");
  person1 = loadImage("people1.png");
  person2 = loadImage("people2.png");
  person3 = loadImage("people3.png");
  person4 = loadImage("people4.png");
  person5 = loadImage("people5.png");
  background2Img = loadImage("cloud.png")
  missileImg = loadImage("missile.png")
  helicopterImg = loadImage("helicopter.png")
  planeImg = loadImage("jet (2).png")


}

function setup() {
  createCanvas(600,800);
 /* background1 = createSprite(300, 400, 50, 50);
  background1.addImage("road",background1Img);
  background1.scale = 1.85;
*/
  background2 = createSprite(300, 400, 50, 50);
  background2.addImage("clouds",background2Img);
  background2.scale = 4.5
  
  edges= createEdgeSprites();
  obstacleGroup = new Group()
  peopleGroup = new Group()
  missileGroup = new Group()
 jetGroup = new Group()
  
 /* bike = createSprite(400, 700, 50, 50);
  bike.addImage("bikeImg", bikeImg)
  bike.scale =0.28;
  bike.debug = true
  bike.setCollider("rectangle",0,0,40,250)
  */
  helicopter = createSprite(540, 400, 50, 50)
  helicopter.addImage("helicopterImg", helicopterImg)
  helicopter.scale = 0.3
  Gamestate = "play"
  Gamecounter = 0
  //Level = 1
  Level = 2
}

function draw() {
  background(0);  
if(Level === 1){

 level1() ;
 console.log(Gamecounter)

}
if(Level === 2){

        level2() ;
        console.log(Gamecounter)
       
}

}


function spawnObstacles() {
  if(frameCount % 20 === 0) {
    var obstacle = createSprite(Math.round(random(50,550)), -10,10,40);
    //obstacle.debug = true;
    obstacle.velocityY = 18;
    
    //generate random obstacles
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: obstacle.addImage(barImg)
      obstacle.scale = 1.2;
      obstacle.setCollider("rectangle",0,0,60,40)
              break;
      case 2: obstacle.addImage(crashImg)
      obstacle.scale = 0.6;
      obstacle.setCollider("rectangle",0,0,400,150)
              break;
      case 3: obstacle.addImage(policeImg);
      obstacle.scale = 2;
      obstacle.setCollider("rectangle",0,0,30,50)
              break;
      case 4: obstacle.addImage(coneImg);
      obstacle.scale = 0.1;
      obstacle.setCollider("rectangle",0,0,70,90)
              break;
      default: break;
    }
    obstacle.debug = true;
   
    //assign scale and lifetime to the obstacle           
    
    obstacle.lifetime = 800/15 ;
    //add each obstacle to the group
   obstacleGroup.add(obstacle);


  }
}
  function spawnPeople() {
    if(frameCount % 70 === 0) {
      var people = createSprite(Math.round(random(50,550)), -10,10,40);
      //obstacle.debug = true;
      people.velocityY = 18;
      
      //generate random obstacles
      var rand = Math.round(random(1,4));
      switch(rand) {
        case 1: people.addImage(person1)
        people.scale = .7;
        people.setCollider("rectangle",0,0,30,50)
                break;
        case 2: people.addImage(person2)
        people.scale = .7;
        people.setCollider("rectangle",0,0,30,50)
                break;
        case 3: people.addImage(person3);
        people.scale = .7;
        people.setCollider("rectangle",0,0,30,50)
                break;
        case 4: people.addImage(person4);
        people.scale = .7;
        people.setCollider("rectangle",0,0,30,50)
                break;
        case 5: people.addImage(person5);
        people.scale = .7;
        people.setCollider("rectangle",0,0,30,50)
                break;
        default: break;
      }
      people.debug = true;
     
      //assign scale and lifetime to the obstacle           
      
      people.lifetime = 800/15 ;
      //add each obstacle to the group
     peopleGroup.add(people);
  
  
    }
  }

