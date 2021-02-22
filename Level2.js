function level2(){

     if(Gamestate === "play"){
          Gamecounter++;
          
      /*    if(Gamecounter > 1800){
            
           bike.destroy()
           background1.destroy()
           obstacleGroup.destroyEach()
           peopleGroup.destroyEach()
           Level = 2 
    
          }
        */  
                  
          if(keyDown("up")){
            helicopter.y -=15;
          }
          if(keyDown("down")){
            helicopter.y +=15;
          }
          
          helicopter.collide(edges[2]);
          helicopter.collide(edges[3]);
          
          spawnJet()
          if(keyWentDown("space")){
            spawnMissile()
          }
         
         for(var i=0; i< jetGroup.length;i++){
             if(missileGroup.isTouching(jetGroup.get(i))){
                 jetGroup.get(i).destroy();
                 missileGroup.destroyEach();
                 jetcount++     
             } 
                        
            }

        
            if(jetcount > 10){

                Gamestate = "End"

            }
          
     }
     drawSprites();    
          
       if(Gamestate === "End"){
            background2.velocityX = 0;
            missileGroup.destroyEach();
            jetGroup.destroyEach();
            fill("green");
            stroke("blue");
            strokeWeight(10)
            textSize(40);
            text('YOU WIN', 180, 400)
            
          }
          
}

function spawnJet() {
    if(frameCount % 40 === 0) {
      var jet = createSprite(-10, Math.round(random(50,650)),10,40);
      jet.debug = true;
      jet.velocityX = Math.round(random(3,8));
        
        jet.addImage(planeImg)
        jet.scale = 0.3;
        jet.setCollider("rectangle",0,0,280,180)
             
      //assign scale and lifetime to the obstacle           
      
      jet.lifetime = 600/3 ;
      //add each obstacle to the group
     jetGroup.add(jet);
  
  
    }
  }
  function spawnMissile() {
   
      var missile = createSprite(helicopter.x, helicopter.y+10,10,40);
      missile.debug = true;
      missile.velocityX = -10;
        
      missile.addImage(missileImg)
        missile.scale = 0.2;
        missile.setCollider("rectangle",0,0,60,40)
             
      //assign scale and lifetime to the obstacle           
      
      missile.lifetime = 600/10 ;
      //add each obstacle to the group
      missileGroup.add(missile);
  
  
    }
  
