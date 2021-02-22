function level1(){
    if(Gamestate === "play"){
      Gamecounter++;
      
      if(Gamecounter > 1800){
        
       bike.destroy()
       background1.destroy()
       obstacleGroup.destroyEach()
       peopleGroup.destroyEach()
       Level = 2 

      }
      
      if(background1.y > 450){
          background1.y = 400
      }
      background1.velocityY = 18;
      
      if(keyDown("left")){
        bike.x -=15;
      }
      if(keyDown("right")){
        bike.x +=15;
      }
      
      bike.collide(edges[0]);
      bike.collide(edges[1]);
      
      spawnObstacles()
      spawnPeople()
      
      if(bike.isTouching(obstacleGroup)){
      
      Gamestate = "End";
      
      }
      if(bike.isTouching(peopleGroup)){

        Gamecounter-= 100

      }
        }
       
      drawSprites();
      if(Gamestate === "End"){
        background1.velocityY = 0;
        bike.velocityX = 0;
        obstacleGroup.setVelocityYEach(0);
        obstacleGroup.setLifetimeEach(-1);
        fill("red");
        stroke("yellow");
        strokeWeight(10)
        textSize(40);
        text('GAME OVER', 180, 400)
        fill("blue");
          textSize(15);
          
        text("Press 'R' To Restart",240, 500)
        Gamecounter = 0
        
      }
      if(keyDown("R") && Gamestate === "End"){
      
      Gamestate = "restart"
      
      }
      if(Gamestate === "restart"){
      
      
      obstacleGroup.destroyEach();
      Gamestate = "play"
      
      }
  }