$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   toggleGrid();


    // TODO 2 - Create Platforms
    //function createPlatform(Xpos, Ypos, Width, Height, "Color")
    //function createPlatform(Xpos, Ypos, Width, Height, "Color", minX, maxX, speedX, minY, maxY, speedY)
    createPlatform(300, 700, 50, 10, "red")
    createPlatform(400, 600, 60, 10, "black")
    createPlatform(500, 500, 60, 10, "green")
    createPlatform(700, 400, 60, 10, "orange")
    
    // TODO 3 - Create Collectables
    //createCollectable("Name", xPos, yPos, GravitNumber, BounceNumber, minX, maxX, speed)
    //createCollectable("Name", xPos, yPos, GravitNumber, BounceNumber)
    //createCollectable("Name", xPos, yPos)
    createCollectable("database", 700, 300)
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("grace", 100, 100, 1, 1, 100, 1300, 5)
    
    // TODO 4 - Create Cannons
    //createCannon ("top bottom left right", position, timeBetweenShots)
    createCannon("top", 800, 1000, 5, 5, 800, 1300, 2)
    createCannon("right", 400, 1000/10, 10, 10)
    createCannon("left", 200, 5000)
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
